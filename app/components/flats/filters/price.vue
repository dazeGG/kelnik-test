<script setup lang="ts">
import { useFiltersStore } from "@/stores";
import UISlider from '@/components/base/ui-slider.vue';

const filtersStore = useFiltersStore();

const priceRange = defineModel<[number, number]>('priceRange', { required: true });
</script>

<template>
	<UISlider
		v-model:value="priceRange"
		label="Стоимость квартиры, ₽"
		:min="filtersStore.limits.price[0]"
		:max="filtersStore.limits.price[1]"
		:interval="100000"
	>
		<template #value-from>{{ priceRange[0].toLocaleString('ru-RU') }}</template>
		<template #value-to>{{ priceRange[1].toLocaleString('ru-RU') }}</template>
	</UISlider>
</template>
