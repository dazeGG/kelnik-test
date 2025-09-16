<script setup lang="ts">
import { debounce } from "lodash";

import UISlider from '@/components/base/ui-slider.vue';

const squareRange = ref<[number, number]>([33, 123]);

const changeSquare = debounce((newValue: [number, number]): void => {
	console.log(newValue);
}, 500);
</script>

<template>
	<UISlider
		v-model:value="squareRange"
		label="Площадь, м²"
		:min="33"
		:max="123"
		:interval="1"
		@update:value="changeSquare"
	/>
</template>
