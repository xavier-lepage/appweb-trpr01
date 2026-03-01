<script setup lang="ts">
import { Collapse } from 'bootstrap';
import { ref, onMounted, useTemplateRef } from 'vue';
import { Priority } from '../models/Priority';
import { ProductAction } from '../models/ProductAction';
import ActionButton from './ActionButton.vue';
import Header from './Header.vue';
import ProductForm from './ProductForm/ProductForm.vue';
import ProductList from './ProductList/ProductList.vue';
import type { Product } from '../models/Product';
import { productCategories } from '../models/ProductCategory';

/*	Documentation utilisée pour le collapse bootstrap:
	https://vuejs.org/guide/essentials/template-refs
	https://vuejs.org/api/composition-api-lifecycle.html#onmounted
	https://getbootstrap.com/docs/5.3/components/collapse/#via-javascript
*/

// Données de seed
const productList = ref<Product[]>([
	{
		id: 1,
		name: "f9 Extreme 420KF-X3D Pro-cessor @ 6.70 Ghz",
		description: "Processeur grand-public le plus rapide.",
		brand: "Fasty",
		price: 420.99,
		stock: 4,
		productCategory: productCategories[0]
	},
	{
		id: 2,
		name: "Fast-9 ATX Motherboard with Wi-Fi",
		description: "Carte mère ATX haute performance.",
		brand: "susA",
		price: 99.99,
		stock: 6,
		productCategory: productCategories[1]
	}
]);
const currentAction = ref<ProductAction>(ProductAction.NONE);
const isListShown = ref<boolean>(false);
const formTitle = ref<string>('Ajouter un composant');
const productListElement = useTemplateRef("productList");
const productFormElement = useTemplateRef("productForm");
let productListCollapse: Collapse;
let productFormCollapse: Collapse;

onMounted(() => {
	if (productFormElement.value !== null) {
		productFormCollapse = new Collapse(productFormElement.value, { toggle: false });
	}
	if (productListElement.value !== null) {
		productListCollapse = new Collapse(productListElement.value, { toggle: false });
	}
});

function toggleAddProductForm(): void {
	manageProductFormVisibility(ProductAction.ADD);
}

function toggleProductList(): void {
	if (isListShown.value) {
		productListCollapse.hide();
	}
	else {
		productListCollapse.show();
	}
	isListShown.value = !isListShown.value;
}

function manageProductFormVisibility(actionPerformed: ProductAction): void {
	if (currentAction.value === actionPerformed) {
		productFormCollapse.hide();
		currentAction.value = ProductAction.NONE;
	} else {
		formTitle.value = actionPerformed;
		productFormCollapse.show();
		currentAction.value = actionPerformed;
	}
}

function handleAddProduct(product: Product) {
	productList.value?.push(product);
	manageProductFormVisibility(ProductAction.ADD);
	productListCollapse.show();
	isListShown.value = true;
}
</script>

<template>
	<div class="container">
		<Header></Header>

		<ActionButton
			class="mx-2 my-4"
			@click="toggleProductList()"
			:label="'Liste des composants'" 
			:priority="Priority.INFO">
		</ActionButton>

		<ActionButton
			class="mx-2 my-4"
			@click="toggleAddProductForm()" 
			:label="'Ajouter un composant'" 
			:priority="Priority.PRIMARY">
		</ActionButton>

		<div class="collapse" ref="productList">
			<ProductList :products="productList"></ProductList>
		</div>

		<div class="collapse" ref="productForm">
			<ProductForm @addProduct="handleAddProduct" :formTitle="formTitle"></ProductForm>
		</div>
	</div>
</template>
