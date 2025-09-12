<script setup lang="ts">
import FlatsList from './list/flats-list.vue';
import type { FlatType } from '../../types';

const flats: FlatType[] = [
	{
		id: 1,
		title: '3-комнатная №104',
		plan: 'plan-default.svg',
		square: 63.1,
		floor: 1,
		maxFloor: 17,
		price: 6630500,
	},
	{
		id: 1,
		title: '3-комнатная №104',
		plan: 'plan-default.svg',
		square: 63.1,
		floor: 1,
		maxFloor: 17,
		price: 6630500,
	},
	{
		id: 1,
		title: '3-комнатная №104',
		plan: 'plan-default.svg',
		square: 63.1,
		floor: 1,
		maxFloor: 17,
		price: 6630500,
	},
	{
		id: 1,
		title: '3-комнатная №104',
		plan: 'plan-default.svg',
		square: 63.1,
		floor: 1,
		maxFloor: 17,
		price: 6630500,
	},
];
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
