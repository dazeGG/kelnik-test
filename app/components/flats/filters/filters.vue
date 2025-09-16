<script setup lang="ts">
import Rooms from "./rooms.vue";
import Price from "./price.vue";
import Square from "./sqaure.vue";

const route = useRoute();
const router = useRouter();

const filters = computed(() => {
	const filters: Partial<Record<'rooms', number>> = {};

	if (route.query.rooms) {
		filters.rooms = +route.query.rooms;
	}

	return filters;
});

const changeRooms = (newRooms: number): void => {
	router.push({ query: { rooms: newRooms } });
};
</script>

<template>
	<div class="flats-filters">
		<Rooms :active-rooms="filters.rooms" @change-rooms="changeRooms" />
		<Price />
		<Square />
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
