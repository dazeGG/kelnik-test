import { ref } from "vue";
import { cloneDeep } from 'lodash';

import type { FlatsFilters, FlatsSort, FlatType } from "@/types";

import flatsMock from '@/__mock__/flats.json';

const TIMEOUT_FROM = 250;
const TIMEOUT_TO = 1000;

interface GetFlatsMethodSuccessResponse {
	success: true
	data: FlatType[]
	more: boolean
}

interface GetFlatsMethodErrorResponse {
	success: false
	message: string
}

interface Pagination {
	count: number
	offset: number
}

const filterByRooms = (flat: FlatType, rooms: number | null): boolean => rooms === null || flat.rooms === rooms;

const filterByPrice = (flat: FlatType, [minPrice, maxPrice]: FlatsFilters['price']): boolean => {
	if (minPrice !== null && flat.price < minPrice) {
		return false;
	}

	if (maxPrice !== null && flat.price > maxPrice) {
		return false;
	}

	return true;
};

const filterBySquare = (flat: FlatType, [minSquare, maxSquare]: FlatsFilters['square']): boolean => {
	if (minSquare !== null && flat.square < minSquare) {
		return false;
	}

	if (maxSquare !== null && flat.square > maxSquare) {
		return false;
	}

	return true;
};

const filterFlats = (flats: FlatType[], filters?: FlatsFilters): FlatType[] => {
	if (!filters) {return flats;}

	return flats.filter(flat => {
		return (
			filterByRooms(flat, filters.rooms) &&
			filterByPrice(flat, filters.price) &&
			filterBySquare(flat, filters.square)
		);
	});
};

const sortFlats = (flats: FlatType[], sort?: FlatsSort): FlatType[] => {
	if (!sort) {
		return flats;
	}

	const { type, mode } = sort;
	return [...flats].sort((a, b) => mode === 'asc' ? a[type] - b[type] : b[type] - a[type]);
};

const getFlats = (
	{ count, offset }: Pagination,
	filters?: FlatsFilters,
	sort?: FlatsSort,
): GetFlatsMethodSuccessResponse | GetFlatsMethodErrorResponse => {
	try {
		const filteredFlats = filterFlats(cloneDeep(flatsMock) as FlatType[], filters);
		const sortedFlats = sortFlats(filteredFlats, sort);

		const total = sortedFlats.length;
		const endIndex = Math.min(offset + count, total);
		const paginatedData = sortedFlats.slice(offset, endIndex);

		return {
			success: true,
			data: paginatedData,
			more: offset + count < total,
		};
	} catch (err) {
		return {
			success: false,
			message: 'Error loading flats: ' + (err instanceof Error ? err.message : String(err)),
		};
	}
};

export const useFlatsStore = defineStore('flats', () => {
	const flats = ref<FlatType[]>([]);
	const hasMore = ref<boolean>(true);
	const loading = ref(false);
	const error = ref<string | null>(null);

	const loadFlats = async ({ count = 5, offset = 0 }: Partial<Pagination>, filters?: FlatsFilters, sort?: FlatsSort): Promise<void> => {
		loading.value = true;
		error.value = null;

		await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (TIMEOUT_TO - TIMEOUT_FROM + 1)) + TIMEOUT_FROM));

		const response = getFlats({ count, offset }, filters, sort);

		if (response.success) {
			if (offset === 0) {
				flats.value = response.data;
			} else {
				flats.value = [...flats.value, ...response.data];
			}

			hasMore.value = response.more;
		} else {
			error.value = response.message;
		}

		loading.value = false;
	};

	return {
		flats,
		hasMore,
		loading,
		error,
		loadFlats,
	};
});
