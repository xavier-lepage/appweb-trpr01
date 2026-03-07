import type { Product } from "../models/Product";

export function generateCSVString(products: Product[]): string {
	let output: string = generateCSVHeaderString();

	products.forEach((product) => {
		output += `${product.id},"${product.name}","${product.description}","${product.brand}",${product.price},${product.stock},"${product.productCategory.name}"\n`;
	});

	return output;
}

function generateCSVHeaderString(): string {
	return "id,name,description,brand,price,stock,productCategory\n";
}
