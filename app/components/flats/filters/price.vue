<script setup lang="ts">
import { debounce } from "lodash";

import UISlider from '@/components/base/ui-slider.vue';

const priceRange = ref<[number, number]>([5500000, 18900000]);

const changePrice = debounce((newValue: [number, number]): void => {
	console.log(newValue);
}, 500);
</script>

<template>
	<UISlider
		v-model:value="priceRange"
		label="Стоимость квартиры, ₽"
		:min="5500000"
		:max="18900000"
		:interval="100000"
		@update:value="changePrice"
	>
		<template #value-from>{{ priceRange[0].toLocaleString('ru-RU') }}</template>
		<template #value-to>{{ priceRange[1].toLocaleString('ru-RU') }}</template>
	</UISlider>
</template>
