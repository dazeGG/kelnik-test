<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		type?: 'default' | 'primary'
		circle?: boolean
		disabled?: boolean
	}>(),
	{
		type: 'default',
	},
);
</script>

<template>
	<button class="button" :disabled="props.disabled" :class="[`button--${props.type}`]">
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	outline: 1px solid var(--color-button-border);
	padding: 8px 24px;
	border-radius: 25px;
	transition: 100ms outline-color ease-in-out;

	&:hover {
		outline-color: var(--color-accent);
	}

	&[disabled] {
		pointer-events: none;
	}
}
</style>
