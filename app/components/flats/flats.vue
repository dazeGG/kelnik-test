<script setup lang="ts">
import FlatsList from './list/list.vue';
import FlatsFilters from './filters/filters.vue';
</script>

<template>
	<div class="flats">
		<div class="flats__content">
			<h1>Квартиры</h1>

			<FlatsList class="flats__list" />
		</div>

		<FlatsFilters class="flats__filters" />
	</div>
</template>

<style scoped lang="scss">
.flats {
	display: flex;

	@include small {
		gap: 28px;
	}

	@include large {
		gap: 80px;
	}

	&__content {
		flex: 1;
	}

	&__list {
		flex: 1;

		@include small {
			margin-top: 24px;
		}

		@include large {
			margin-top: 48px;
		}
	}
}
</style>
