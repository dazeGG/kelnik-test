<script setup lang="ts">
import type { FlatType } from '@/types';

const props = defineProps<{
	flat: FlatType
}>();
</script>

<template>
	{{ props.flat }}
	<img :src="props.flat.plan" alt="" >
</template>

<style scoped lang="scss">
</style>
