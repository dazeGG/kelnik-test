<script setup lang="ts">
import UILoader from "../../base/ui-loader.vue";

import type { FlatType } from '../../../types';

const props = defineProps<{
	flats: FlatType[]
	loading?: boolean
}>();

interface Column {
	key: string
	title: string
	sortable?: boolean
}

const columns: Column[] = [
	{
		key: 'plan',
		title: 'Планировка',
	},
	{
		key: 'flat',
		title: 'Квартира',
	},
	{
		key: 'square',
		title: 'S, м²',
	},
	{
		key: 'floor',
		title: 'Этаж',
	},
	{
		key: 'price',
		title: 'Цена, ₽',
	},
];
</script>

<template>
	<div class="flats-table-container">
		<table class="flats-table">
			<thead class="flats-table__head">
				<tr>
					<th v-for="column in columns" :key="column.key">{{ column.title }}</th>
				</tr>
			</thead>

			<tbody class="flats-table__body">
				<tr v-for="flatData in props.flats" :key="flatData.id" class="flat">
					<td>
						<img :src="flatData.plan" alt="" class="flat__plan" >
					</td>
					<td>
						<span class="flat__title">
							{{ flatData.rooms }}-комнатная №{{ flatData.number }}
						</span>
					</td>
					<td>
						<span class="flat__square">
							{{ flatData.square.toString().replace('.', ',') }}
						</span>
					</td>
					<td>
						<span class="flat__floor">
							{{ flatData.floor }}
							<span :style="{ color: 'var(--color-text-muted)' }">из {{ flatData.maxFloor }}</span>
						</span>
					</td>
					<td>
						<span  class="flat__price">
							{{ flatData.price.toLocaleString('ru-RU') }}
						</span>
					</td>
				</tr>
			</tbody>
		</table>

		<div class="flats-table__loader">
			<UILoader v-if="props.loading" :size="32" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.flats-table-container,
.flats-table,
.flats-table__loader {
	width: 100%;
}

.flats-table {
	tr {
		border-bottom: 1px solid var(--color-border);
	}

	&__head {
		th {
			padding-bottom: 16px;
			text-align: left;
			font-size: 14px;
			font-weight: 400;
		}
	}

	&__body {
		td {
			padding-top: 16px;
			padding-bottom: 24px;
			vertical-align: top;
		}
	}

	&__loader {
		padding-top: 16px;
		padding-bottom: 24px;
		display: flex;
		justify-content: center;
	}
}

.flat {
	&__plan {
		width: 80px;
		aspect-ratio: 1;
	}

	&__title {
		font-weight: 500;
	}
}
</style>
