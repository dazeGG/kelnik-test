<script setup lang="ts">
import FlatsList from './list/list.vue';
import FlatsFilters from './filters/filters.vue';
</script>

<template>
	<div class="flats">
		<h1>Квартиры</h1>

		<div class="flats__content">
			<FlatsList class="flats__list" />
			<FlatsFilters class="flats__filters" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.flats {
	display: flex;
	flex-direction: column;
	gap: 48px;

	&__content {
		width: 100%;
		display: flex;
		gap: 80px;
	}

	&__list {
		flex: 1;
	}
}
</style>
