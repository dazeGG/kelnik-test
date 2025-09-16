<script setup lang="ts">
import { watch } from "vue";

import { useFlatsStore } from "@/stores";
import UIButton from "@/components/base/ui-button.vue";

import FlatsTable from './table/flats-table.vue';

const route = useRoute();
const router = useRouter();

const flatsStore = useFlatsStore();

const sort = computed<{ type: 'square' | 'floor' | 'price'; mode: 'asc' | 'desc' } | undefined>(() => {
	const { sort_type, sort_mode } = route.query;

	if (!sort_type || !sort_mode) {
		return;
	}

	const validTypes = ['square', 'floor', 'price'];
	const validModes = ['asc', 'desc'];

	if (!validTypes.includes(sort_type as string) || !validModes.includes(sort_mode as string)) {
		return undefined;
	}

	return {
		type: sort_type as 'square' | 'floor' | 'price',
		mode: sort_mode as 'asc' | 'desc',
	};
});

const loadMore = () => {
	flatsStore.loadFlats({ offset: flatsStore.flats.length });
};

const changeSort = (sortKey: string): void => {
	const { sort_type, sort_mode, ...restQuery } = route.query;

	if (sort.value?.type === sortKey) {
		if (sort.value.mode === 'asc') {
			router.push({ query: { ...restQuery, sort_type: sortKey, sort_mode: 'desc' } });
		} else {
			router.push({ query: restQuery });
		}
	} else {
		router.push({ query: { ...restQuery, sort_type: sortKey, sort_mode: 'asc' } });
	}
};

watch(
	() => sort.value,
	(newSort) => {
		flatsStore.loadFlats({ count: flatsStore.flats.length }, newSort);
	},
);

const created = () => {
	flatsStore.loadFlats({});
};

created();
</script>

<template>
	<div class="flats-list">
		<FlatsTable :flats="flatsStore.flats" :loading="flatsStore.loading" :sort="sort" @change-sort="changeSort" />

		<UIButton :disabled="!flatsStore.hasMore" @click="loadMore">Загрузить еще</UIButton>
	</div>
</template>

<style scoped lang="scss">
.flats-list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 48px;
}
</style>
