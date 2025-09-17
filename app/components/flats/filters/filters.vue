<script setup lang="ts">
import { cloneDeep, debounce } from "lodash";
import { useFiltersStore } from "@/stores";

import Rooms from "./rooms.vue";
import Price from "./price.vue";
import Square from "./sqaure.vue";

const route = useRoute();
const router = useRouter();

const filtersStore = useFiltersStore();

const rooms = ref<number | null>(null);
const priceRange = ref<[number, number]>(cloneDeep(filtersStore.limits.price));
const squareRange = ref<[number, number]>(cloneDeep(filtersStore.limits.square));

const initRooms = (): void => {
	if (route.query.rooms) {
		rooms.value = +route.query.rooms;
	}

	if (route.query.price_to) {
		priceRange.value[1] = +route.query.price_to;
	}
};

const initPriceRange = (): void => {
	if (route.query.price_from) {
		priceRange.value[0] = +route.query.price_from;
	}

	if (route.query.price_to) {
		priceRange.value[1] = +route.query.price_to;
	}
};

const initSquareRange = (): void => {
	if (route.query.square_from) {
		squareRange.value[0] = +route.query.square_from;
	}

	if (route.query.square_to) {
		squareRange.value[1] = +route.query.square_to;
	}
};

const changeRooms = debounce((newRooms: number | null): void => {
	router.push({ query: { ...route.query, rooms: newRooms ?? undefined } });
}, 500);

const changePrice = debounce((newPrice: [number, number]): void => {
	router.push({
		query: {
			...route.query,
			price_from: newPrice[0] !== filtersStore.limits.price[0] ? newPrice[0] : undefined,
			price_to: newPrice[1] !== filtersStore.limits.price[1] ? newPrice[1] : undefined,
		} });
}, 500);

const changeSquare = debounce((newSquare: [number, number]): void => {
	router.push({
		query: {
			...route.query,
			square_from: newSquare[0] !== filtersStore.limits.square[0] ? newSquare[0] : undefined,
			square_to: newSquare[1] !== filtersStore.limits.square[1] ? newSquare[1] : undefined,
		} });
}, 500);

const created = () => {
	initRooms();
	initPriceRange();
	initSquareRange();
};

created();

watch(rooms, changeRooms, { deep: true });
watch(priceRange, changePrice, { deep: true });
watch(squareRange, changeSquare, { deep: true });
</script>

<template>
	<div class="flats-filters">
		<Rooms v-model:rooms="rooms" />
		<Price v-model:price-range="priceRange" />
		<Square v-model:square-range="squareRange" />
	</div>
</template>

<style scoped lang="scss">
.flats-filters {
	width: fit-content;
	height: fit-content;
	padding: 40px;
	background: var(--color-accent-muted);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}
</style>
