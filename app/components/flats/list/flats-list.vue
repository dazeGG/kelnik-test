<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useFlatsStore } from "../../../stores";

import UIButton from "../../base/ui-button.vue";
import FlatsTable from './flats-table.vue';

const flatsStore = useFlatsStore();

onBeforeMount(() => flatsStore.loadFlats({}));

const loadMore = () => {
	flatsStore.loadFlats({ offset: flatsStore.flats.length });
};
</script>

<template>
	<div class="flats-list">
		<FlatsTable :flats="flatsStore.flats" />

		<UIButton :disabled="!flatsStore.hasMore" @click="loadMore">Загрузить еще</UIButton>
	</div>
</template>

<style scoped lang="scss">
.flats-list {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 48px;
}
</style>
