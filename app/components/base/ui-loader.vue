<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		size?: number
	}>(),
	{
		size: 16,
	},
);
</script>

<template>
	<div class="loader" :style="{ '--size': props.size + 'px' }" />
</template>

<style scoped lang="scss">
.loader {
	width: var(--size);
	aspect-ratio: 1;
	border-radius: 50%;
	border: calc(var(--size) * 0.1) solid;
	border-color: var(--color-accent) transparent;
	animation: l1 500ms infinite ease-in-out;
}

@keyframes l1 {to{transform: rotate(.5turn)}}
</style>
