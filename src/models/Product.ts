import type { ProductCategory } from "./productCategory";

export interface Product {
	id: number,
	name: string,
	description: string,
	brand: string,
	price: number,
	stock: number,
	productCategory: ProductCategory
}
