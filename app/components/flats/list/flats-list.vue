<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useFlatsStore } from "../../../stores";

import FlatsTable from './flats-table.vue';

const flatsStore = useFlatsStore();

onBeforeMount(() => flatsStore.loadFlats({}));
</script>

<template>
	<div class="flats-list">
		<FlatsTable :flats="flatsStore.flats" />
	</div>
</template>

<style scoped lang="scss">
</style>
