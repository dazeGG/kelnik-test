<script setup lang="ts">
import UILoader from "@/components/base/ui-loader.vue";
import type { FlatType } from "@/types";

import Flat from "./flat.vue";
import SortButton from "../sort-button.vue";

const emit = defineEmits<{
	(e: 'change-sort', sortKey: string): void
}>();

const props = defineProps<{
	flats: FlatType[]
	loading?: boolean
	sort?: { type: 'square' | 'floor' | 'price'; mode: 'asc' | 'desc' } | null
}>();

const changeSort = (sortKey: string): void => {
	emit('change-sort', sortKey);
};
</script>

<template>
	<div class="flats-cards">
		<div class="flats-cards__sort">
			<SortButton
				:mode="props.sort?.type === 'square' ? props.sort.mode : null"
				@click="() => changeSort('square')"
			>
				S, м²
			</SortButton>

			<SortButton
				:mode="props.sort?.type === 'floor' ? props.sort.mode : null"
				@click="() => changeSort('floor')"
			>
				Этаж
			</SortButton>

			<SortButton
				:mode="props.sort?.type === 'price' ? props.sort.mode : null"
				@click="() => changeSort('price')"
			>
				Цена, ₽
			</SortButton>
		</div>

		<div class="flats-cards__content">
			<Flat v-for="flat in props.flats" :key="flat.id" :flat="flat" />

			<div v-if="props.loading" class="flats-cards__loader">
				<UILoader :size="24" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.flats-cards {
	&__sort {
		display: flex;
		gap: 20px;
	}

	&__content {
		margin-top: 12px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	&__loader {
		margin-top: 16px;
		display: flex;
		justify-content: center;
	}
}
</style>
