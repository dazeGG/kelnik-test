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

const getFlats = ({ count, offset }: Pagination): GetFlatsMethodSuccessResponse | GetFlatsMethodErrorResponse => {
	try {
		const totalFlats = flatsMock as FlatType[];
		const endIndex = Math.min(offset + count, totalFlats.length);

		return {
			success: true,
			data: totalFlats.slice(offset, endIndex),
			more: offset + count < totalFlats.length,
		};
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

	const loadFlats = async ({ count = 50, offset = 0 }: Partial<Pagination>): Promise<void> => {
		loading.value = true;
		error.value = null;

		await new Promise(resolve => setTimeout(resolve, 200));

		const response = getFlats({ count, offset });

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
