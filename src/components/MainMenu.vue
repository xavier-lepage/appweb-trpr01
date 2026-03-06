<script setup lang="ts">
import { Collapse, Modal } from 'bootstrap';
import { ref, onMounted, useTemplateRef } from 'vue';
import { Priority } from '../models/Priority';
import { ProductAction } from '../models/ProductAction';
import ActionButton from './ActionButton.vue';
import Header from './Header.vue';
import ProductForm from './ProductForm/ProductForm.vue';
import ProductList from './ProductList/ProductList.vue';
import type { Product } from '../models/Product';
import { productCategories } from '../models/ProductCategory';
import StockAlert from './StockAlert.vue';

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
const currentProduct = ref<Product>();
const isListShown = ref<boolean>(false);
const formTitle = ref<string>('Ajouter un composant');
	
/*	Documentation utilisée pour useTemplateRef:
	https://vuejs.org/guide/essentials/template-refs
*/
const productListElement = useTemplateRef("productList");
const productFormElement = useTemplateRef("productForm");

/*	Documentation utilisée pour le collapse bootstrap:
	https://getbootstrap.com/docs/5.3/components/collapse/#via-javascript
*/
let productListCollapse: Collapse;
let productFormCollapse: Collapse;

/*	Documentation utilisée pour le modal Bootstrap:
	https://getbootstrap.com/docs/5.3/components/modal/#via-javascript
*/
const productDeleteElement = useTemplateRef("productDelete");
let productDeleteModal: Modal;

/*	Documentation utilisée pour onMounted:
	https://vuejs.org/api/composition-api-lifecycle.html#onmounted
*/
onMounted(() => {
	if (productFormElement.value !== null) {
		productFormCollapse = new Collapse(productFormElement.value, { toggle: false });
	}
	if (productListElement.value !== null) {
		productListCollapse = new Collapse(productListElement.value, { toggle: false });
	}
	if (productDeleteElement.value !== null) {
		productDeleteModal = new Modal(productDeleteElement.value, { backdrop: 'static', keyboard: false });
	}
});

function toggleAddProductForm(): void {
	manageProductFormVisibility(ProductAction.ADD);
	if (currentAction.value === ProductAction.ADD) {
		closeProductList();
	}
}

function closeProductList(): void {
	productListCollapse.hide();
	isListShown.value = false;
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
		currentProduct.value = undefined
		formTitle.value = actionPerformed;
		productFormCollapse.show();
		currentAction.value = actionPerformed;
	}
}

function addProduct(productToAdd: Product): void {
	productList.value?.push(productToAdd);
}

function deleteProduct(): void {
	/*	Documentation utilisée pour la méthode filter:
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#parameters
	*/
	productList.value = productList.value?.filter((product) => product !== currentProduct.value);
	currentProduct.value = undefined;
}

function handleAddProduct(productToAdd: Product, action: ProductAction): void {
	addProduct(productToAdd);
	manageProductFormVisibility(action);
	productListCollapse.show();
	isListShown.value = true;
}

function handleEditProduct(productToEdit: Product): void {
	productList.value?.forEach((product, i) => {
		if (product.id === productToEdit.id) {
			productList.value[i] = productToEdit;
		}
	});
	manageProductFormVisibility(ProductAction.EDIT);
	productListCollapse.show();
	isListShown.value = true;
}

function handleDeleteProduct(productToDelete: Product): void {
	currentProduct.value = productToDelete;
	productFormCollapse.hide();
	productDeleteModal.show();
}

function openCloneProductForm(product: Product): void {
	manageProductFormVisibility(ProductAction.CLONE);
	closeProductList();
	currentProduct.value = product;
}

function openEditProductForm(product: Product): void {
	manageProductFormVisibility(ProductAction.EDIT);
	closeProductList();
	currentProduct.value = product;
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

		<div v-for="product in productList">
			<StockAlert v-if="product.stock <= 3" :product="product"></StockAlert>
		</div>

		<div class="collapse" ref="productList">
			<ProductList 
				@cloneProduct="openCloneProductForm" 
				@editProduct="openEditProductForm" 
				@deleteProduct="handleDeleteProduct" 
				:products="productList">
			</ProductList>
		</div>

		<div class="collapse" ref="productForm">
			<ProductForm 
				@addProduct="handleAddProduct" 
				@editProduct="handleEditProduct" 
				:product="currentProduct" 
				:currentAction="currentAction" 
				:formTitle="formTitle">
			</ProductForm>
		</div>

		<!-- Fortement inspiré de la documentation Boostrap:
		https://getbootstrap.com/docs/5.3/components/modal/#static-backdrop -->
		<div ref="productDelete" class="modal fade" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-sm">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">Supprimer le produit?</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						Le produit sélectionné sera définitivement supprimé.
					</div>
					<div class="modal-footer">
						<ActionButton
							:label="'Annuler'"
							:priority="Priority.SECONDARY"
							data-bs-dismiss="modal">
						</ActionButton>
						<ActionButton
							@click="deleteProduct"
							:label="'Supprimer'"
							:priority="Priority.DANGER"
							data-bs-dismiss="modal">
						</ActionButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
