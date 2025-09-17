<script setup lang="ts">
import type { FlatType } from '@/types';

const props = defineProps<{
	flat: FlatType
}>();
</script>

<template>
	<div class="flat">
		<div class="flat__data">
			<span>{{ flat.rooms }}-комнатная №{{ flat.number }}</span>

			<div class="flat__info">
				<span>{{ flat.square.toString().replace('.', ',') }} м²</span>
				<span>
					{{ flat.floor }}
					<span :style="{ color: 'var(--color-text-muted)' }">из {{ flat.maxFloor }} этаж</span>
				</span>
				<span>{{ flat.price.toLocaleString('ru-RU') }} ₽</span>
			</div>
		</div>
		<div class="flat__plan">
			<img :src="props.flat.plan" alt="" >
		</div>
	</div>
</template>

<style scoped lang="scss">
.flat {
	padding: 16px 24px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	display: flex;
	gap: 20px;

	&__data {
		flex: 1;
	}

	&__info {
		margin-top: 16px;
		display: flex;
		gap: 20px;
	}

	&__plan {
		width: 80px;
		aspect-ratio: 1;
	}
}
</style>
