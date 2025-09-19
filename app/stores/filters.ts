import { ref } from "vue";

export const useFiltersStore = defineStore('filters', () => {
	const limits = ref<{ price: [number, number], square: [number, number] }>({
		price: [10000000, 50000000],
		square: [30, 120],
	});

	return {
		limits,
	};
});
