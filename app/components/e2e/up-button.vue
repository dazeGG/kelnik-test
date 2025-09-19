<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

import UIButton from "@/components/base/ui-button.vue";
import ArrowUp from '@/assets/icons/arrow-up.svg';

const { y } = useWindowScroll();

const scrollToTop = () => {
	window.scrollTo(0, 0);
};
</script>

<template>
	<UIButton v-show="y > 0" circle type="primary" class="up-button" @click="scrollToTop">
		<ArrowUp />
	</UIButton>
</template>

<style scoped lang="scss">
.up-button {
	position: fixed;
	bottom: 32px;
	right: 32px;

	width: 40px;
	height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
