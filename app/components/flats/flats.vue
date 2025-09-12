<script setup lang="ts">
import FlatsList from './list/flats-list.vue';
</script>

<template>
	<div class="flats">
		<h1>Квартиры</h1>
		<FlatsList />
	</div>
</template>

<style scoped lang="scss">
.flats {
	display: flex;
	flex-direction: column;
	gap: 48px;
}
</style>
