import type { Product } from "../models/Product";

function generateCSVString(products: Product[]): string {
	let output: string = generateCSVHeaderString();

	products.forEach((product) => {
		output += `\n${product.id},"${product.name}","${product.description}","${product.brand}",${product.price},${product.stock},"${product.productCategory.name}"`;
	});

	return output;
}

function generateCSVHeaderString(): string {
	return "id,name,description,brand,price,stock,productCategory";
}

function getDownloadDate(): string {
	let downloadDate: Date = new Date();
	return `${downloadDate.getFullYear()}_${downloadDate.getMonth() + 1}_${downloadDate.getDate()}`;
}

/*	Documentation consultée pour la réalisation de cette méthode:
	https://www.bitdegree.org/learn/javascript-download#making-javascript-download-files-without-the-server
	https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#download
	https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static#parameters
	https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob#parameters
	https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#structure_of_a_mime_type
	https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
	https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#basic_example
	https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute#parameters
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent#parameters
*/
export function exportProductsCSV(products: Product[]): void {
	let output: string = generateCSVString(products);
	let downloadLink: HTMLAnchorElement = document.createElement('a');

	downloadLink.setAttribute(
		'href', 
		'data:text/csv;charset=utf-8,' + encodeURIComponent(output)
	);
	downloadLink.setAttribute(
		'download', 
		`composants_${getDownloadDate()}.csv`
	);

	downloadLink.click();
}
