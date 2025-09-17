<script setup lang="ts">
import UILoader from "@/components/base/ui-loader.vue";
import type { FlatType } from "@/types";

import Flat from "./flat.vue";

const props = defineProps<{
	flats: FlatType[]
	loading?: boolean
	sort?: { type: 'square' | 'floor' | 'price'; mode: 'asc' | 'desc' } | null
}>();
</script>

<template>
	<div class="flats-cards">
		<Flat v-for="flat in props.flats" :key="flat.id" :flat="flat" />

		<div v-if="props.loading" class="flats-cards__loader">
			<UILoader :size="24" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.flats-cards {
	display: flex;
	flex-direction: column;
	gap: 4px;

	&__loader {
		margin-top: 16px;
		display: flex;
		justify-content: center;
	}
}
</style>
