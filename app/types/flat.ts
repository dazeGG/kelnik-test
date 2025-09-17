export interface FlatType {
	id: number
	plan: string
	rooms: number
	number: number
	square: number
	floor: number
	maxFloor: number
	price: number
}

export interface FlatsSort {
	type: 'square' | 'floor' | 'price'
	mode: 'asc' | 'desc'
}

export interface FlatsFilters {
	rooms: number | null
	price: [number | null, number | null]
	square: [number | null, number | null]
}
