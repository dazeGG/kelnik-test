<script setup lang="ts">
import UIButton from "@/components/base/ui-button.vue";

const rooms = [1, 2, 3, 4];

const props = defineProps<{
	activeRooms?: number
}>();

const emit = defineEmits<{
	(e: 'change-rooms', newRoom: number): void
}>();
</script>

<template>
	<div class="filters-rooms">
		<UIButton
			v-for="room in rooms"
			:key="room"
			circle
			:type="props.activeRooms === room ? 'primary' : 'default'"
			@click="() => emit('change-rooms', room)"
		>
			{{ room }}к
		</UIButton>
	</div>
</template>

<style scoped lang="scss">
.filters-rooms {
	display: flex;
	gap: 16px;
}
</style>
