<script setup lang="ts">
import UIButton from "@/components/base/ui-button.vue";

const rooms = [1, 2, 3, 4];

const roomsValue = defineModel<number | null>('rooms', { required: true });

const toggleValue = (valueToToggle: number | null): void => {
	roomsValue.value = roomsValue.value === valueToToggle ? null : valueToToggle;
};
</script>

<template>
	<div class="filters-rooms">
		<UIButton
			v-for="room in rooms"
			:key="room"
			circle
			:type="roomsValue === room ? 'primary' : 'default'"
			@click="() => toggleValue(room)"
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
