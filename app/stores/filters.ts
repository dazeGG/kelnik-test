import { ref } from "vue";

export const useFiltersStore = defineStore('filters', () => {
	const limits = ref<{ price: [number, number], square: [number, number] }>({
		price: [5500000, 18900000],
		square: [33, 123],
	});

	return {
		limits,
	};
});
