<script setup lang="ts">
import ArrowDownIcon from '../../../../assets/icons/arrow-down.svg';

const props = defineProps<{
	mode: 'asc' | 'desc' | null
}>();
</script>

<template>
	<button class="table-sortable">
		<slot />

		<span
			:data-asc="props.mode === 'asc' ? '' : undefined"
			:data-desc="props.mode === 'desc' ? '' : undefined"
			class="table-sortable__arrows"
		>
			<ArrowDownIcon :style="{ rotate: '180deg' }" />
			<ArrowDownIcon />
		</span>
	</button>
</template>

<style scoped lang="scss">
.table-sortable {
	display: flex;
	align-items: center;
	gap: 8px;
	transition: 100ms color ease-in-out;

	&:hover {
		color: var(--color-accent);
	}

	&__arrows {
		display: flex;
		flex-direction: column;
		gap: 2px;

		> * {
			height: 4px;
			color: var(--color-text);
			opacity: 0.4;
		}

		&[data-asc] {
			> *:first-child {
				color: var(--color-accent);
				opacity: 1;
			}
		}

		&[data-desc] {
			> *:last-child {
				color: var(--color-accent);
				opacity: 1;
			}
		}
	}
}
</style>
