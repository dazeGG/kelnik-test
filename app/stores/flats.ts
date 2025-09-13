import { ref } from "vue";

import flatsMock from '../__mock__/flats.json';
import type { FlatType } from "../types";

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

interface Sort {
	type: 'square' | 'floor' | 'price'
	mode: 'asc' | 'desc'
}

const getFlats = ({ count, offset }: Pagination, sort?: Sort): GetFlatsMethodSuccessResponse | GetFlatsMethodErrorResponse => {
	try {
		const totalFlats = flatsMock as FlatType[];
		const endIndex = Math.min(offset + count, totalFlats.length);

		const sharedResponse = {
			success: true,
			more: offset + count < totalFlats.length,
		} as const;

		if (sort) {
			const { type, mode } = sort;
			const sortedData = totalFlats.sort((a, b) => mode === 'asc' ? a[type] - b[type] : b[type] - a[type]);

			return {
				...sharedResponse,
				data: sortedData.slice(offset, endIndex),
			};
		} else {
			return {
				...sharedResponse,
				data: totalFlats.slice(offset, endIndex),
			};
		}
	} catch (err) {
		return {
			success: false,
			message: 'Error loading flats: ' + err,
		};
	}
};

export const useFlatsStore = defineStore('flats', () => {
	const flats = ref<FlatType[]>([]);
	const hasMore = ref<boolean>(true);
	const loading = ref(false);
	const error = ref<string | null>(null);

	const loadFlats = async ({ count = 5, offset = 0 }: Partial<Pagination>, sort?: Sort): Promise<void> => {
		loading.value = true;
		error.value = null;

		await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (2000 - 500 + 1)) + 500));

		const response = getFlats({ count, offset }, sort);

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
