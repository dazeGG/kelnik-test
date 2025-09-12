<script setup lang="ts">
import type { FlatType } from '../../../types';

const props = defineProps<{
	flats: FlatType[]
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
	<table class="flats-table">
		<thead class="flats-table__head">
			<tr>
				<th v-for="column in columns" :key="column.key">{{ column.title }}</th>
			</tr>
		</thead>
		<tbody class="flats-table__body">
			<tr v-for="flatData in props.flats" :key="flatData.id" class="flat">
				<td>
					<img :src="flatData.plan" alt="" class="flat__plan" />
				</td>
				<td class="flat__title">{{ flatData.rooms }}-комнатная №{{ flatData.number }}</td>
				<td class="flat__square">{{ flatData.square.toString().replace('.', ',') }}</td>
				<td class="flat__floor">
					{{ flatData.floor }}
					<span :style="{ color: 'var(--color-text-muted)' }">из {{ flatData.maxFloor }}</span>
				</td>
				<td class="flat__price">{{ flatData.price }}</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped lang="scss">
.flats-table {
	width: 100%;

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
