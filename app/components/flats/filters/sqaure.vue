<script setup lang="ts">
import { useFiltersStore } from "@/stores";
import UISlider from '@/components/base/ui-slider.vue';

const filtersStore = useFiltersStore();

const squareRange = defineModel<[number, number]>('squareRange', { required: true });
</script>

<template>
	<UISlider
		v-model:value="squareRange"
		label="Площадь, м²"
		:min="filtersStore.limits.square[0]"
		:max="filtersStore.limits.square[1]"
		:interval="1"
	/>
</template>
