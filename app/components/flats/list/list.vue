<script setup lang="ts">
import { watch } from "vue";

import { useFlatsStore } from "@/stores";
import UIButton from "@/components/base/ui-button.vue";
import type { FlatsFilters, FlatsSort } from "@/types";

import FlatsTable from './table/flats-table.vue';

const route = useRoute();
const router = useRouter();

const flatsStore = useFlatsStore();

const sort = computed<FlatsSort | undefined>(() => {
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

const filters = computed<FlatsFilters>(() => {
	const { rooms, price_from, price_to, square_from, square_to } = route.query;

	return {
		rooms: rooms ? +rooms : null,
		price: [price_from ? +price_from : null, price_to ? +price_to : null],
		square: [square_from ? +square_from : null, square_to ? +square_to : null],
	};
});

const loadMore = (): void => {
	flatsStore.loadFlats({ offset: flatsStore.flats.length }, filters.value, sort.value);
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

const reloadFlats = (): void => {
	flatsStore.loadFlats({}, filters.value, sort.value);
};

watch(filters, reloadFlats, { deep: true });
watch(sort, reloadFlats, { deep: true });

const created = () => {
	reloadFlats();
};

created();
</script>

<template>
	<div class="flats-list">
		<FlatsTable :flats="flatsStore.flats" :loading="flatsStore.loading" :sort="sort" @change-sort="changeSort" />

		<UIButton :disabled="!flatsStore.hasMore" class="flats-list__load-more" @click="loadMore">Загрузить еще</UIButton>
	</div>
</template>

<style scoped lang="scss">
.flats-list {
	&__load-more {
		@include small {
			margin-top: 24px;
		}

		@include large {
			margin-top: 48px;
		}
	}
}
</style>
