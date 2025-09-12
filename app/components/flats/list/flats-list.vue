<script setup lang="ts">
import FlatsTable from './flats-table.vue';
import type { FlatType } from '../../../types';

const props = defineProps<{
	flats: FlatType[]
}>();
</script>

<template>
	<div class="flats-list">
		<FlatsTable :flats="props.flats" />
	</div>
</template>

<style scoped lang="scss">
</style>
