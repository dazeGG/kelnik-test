<script setup lang="ts">
import flats from '../../__mock__/flats.json';
import FlatsList from './list/flats-list.vue';
</script>

<template>
	<div class="flats">
		<h1>Квартиры</h1>
		<FlatsList :flats="flats" />
	</div>
</template>

<style scoped lang="scss">
.flats {
	display: flex;
	flex-direction: column;
	gap: 48px;
}
</style>
