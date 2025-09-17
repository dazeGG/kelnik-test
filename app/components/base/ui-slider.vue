<script setup lang="ts">
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';

const value = defineModel<[number, number]>('value');

const props = defineProps<{
	min: number
	max: number
	interval: number

	label?: string
}>();
</script>

<template>
	<div class="ui-slider">
		<slot name="label">
			<div v-if="props.label" class="ui-slider__label">{{ props.label }}</div>
		</slot>

		<div v-if="value" class="ui-slider__values">
			<div class="ui-slider__value">
				<div class="ui-slider__value-label">от</div>
				<slot name="value-from">{{ value[0] }}</slot>
			</div>
			<div class="ui-slider__value">
				<div class="ui-slider__value-label">до</div>
				<slot name="value-to">{{ value[1] }}</slot>
			</div>
		</div>

		<VueSlider
			v-model="value"
			tooltip="none"
			:min="props.min"
			:max="props.max"
			:interval="props.interval"
			:duration="0"
			drag-on-click
		/>
	</div>
</template>

<style scoped lang="scss">
.ui-slider {
	display: flex;
	flex-direction: column;
	gap: 6px;

	&__label {
		font-size: 14px;
	}

	&__values {
		display: flex;

		> * {
			flex: 1;
		}
	}

	&__value {
		display: flex;
		gap: 8px;
	}

	&__value-label {
		color: var(--color-text-muted);
	}
}
</style>

<style lang="scss">
.vue-slider-rail {
	background: var(--color-text-10);
	height: 3px !important;

	@include small {
		min-width: 280px;
	}

	@include large {
		min-width: 320px;
	}
}

.vue-slider-dot-handle {
	box-shadow: none !important;
}

.vue-slider-process,
.vue-slider-dot-handle,
.vue-slider-dot-tooltip-inner {
	background-color: var(--color-accent) !important;
}


.vue-slider-dot-tooltip-inner-top::after {
	border-top-color: var(--color-accent) !important;
}
</style>
