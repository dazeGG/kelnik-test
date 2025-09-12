<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		type?: 'default' | 'primary'
		circle?: boolean
		disabled?: boolean
		borderless?: boolean
	}>(),
	{
		type: 'default',
	},
);
</script>

<template>
	<button
		class="ui-button"
		:data-circle="props.circle ? '' : undefined"
		:data-borderless="props.borderless ? '' : undefined"
		:disabled="props.disabled"
		:class="[`ui-button--${props.type}`]"
	>
		<slot />
	</button>
</template>

<style lang="scss">
.ui-button {
	transition-timing-function: ease-in-out;
	transition-duration: 100ms;
	transition-property: outline-color, box-shadow;

	&.ui-button--default {
		background-color: white;
		--outline-color: var(--color-button-border);
	}

	&.ui-button--primary {
		background-color: var(--color-accent);
		color: white;
		--outline-color: var(--color-accent);
	}

	&:not([data-borderless]) {
		outline: 1px solid var(--outline-color);

		&:hover {
			outline-color: var(--color-accent);
		}
	}

	&[data-circle] {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}

	&:not([data-circle]) {
		padding: 8px 24px;
		border-radius: 25px;
	}

	&[disabled] {
		pointer-events: none;
	}

	&:hover {
		box-shadow: 0 6px 20px 0 #95D0A1;
	}
}
</style>
