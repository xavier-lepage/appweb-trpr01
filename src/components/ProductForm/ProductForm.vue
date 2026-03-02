<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { productCategories, type ProductCategory } from '../../models/ProductCategory';
import ActionButton from '../ActionButton.vue';
import { Priority } from '../../models/Priority';
import type { Product } from '../../models/Product';
import { ProductAction } from '../../models/ProductAction';

const props = defineProps<{
	formTitle: string,
	currentAction: ProductAction
	productToEdit?: Product
}>();

const emit = defineEmits(['addProduct', 'editProduct']);

const PRODUCT_REGEX = /^\d+\.\d{2}$/gm

const productID = ref<string>();
const productName = ref<string>();
const productDescription = ref<string>();
const productBrand = ref<string>();
const productPrice = ref<string>();
const productStock = ref<string>();
const productCategory = ref<ProductCategory>(productCategories[0]);
const buttonPriority = computed(() => {
	switch (props.currentAction) {
		case ProductAction.ADD:
			return Priority.PRIMARY;
		case ProductAction.EDIT:
			return Priority.WARNING;
	}
});

/*	Documentation utilisée pour watch:
	https://vuejs.org/guide/essentials/watchers.html#watch-source-types
	https://vuejs.org/guide/essentials/watchers.html#eager-watchers
*/
watch(
	() => props.productToEdit,
  	(productToEdit) => {
		if (productToEdit !== undefined) {
			productID.value = productToEdit.id.toString();
			productName.value = productToEdit.name;
			productDescription.value = productToEdit.description;
			productBrand.value = productToEdit.brand;
			productPrice.value = productToEdit.price.toString();
			productStock.value = productToEdit.stock.toString();
			productCategory.value = productToEdit.productCategory;
		}
	},
	{ immediate: true }
);

function isRealTimeIDValid(): boolean {
	return !(productID.value! <= "0");
}

function isRealTimeNameValid(): boolean {
	if (productName.value?.valueOf().trim() !== "") {
		if (productName.value?.length! < 3) {
			return false;
		}
		return true;
	}
	return false;
}

function isRealTimeDescriptionValid(): boolean {
	return productDescription.value?.length! != 0;
}

function isRealTimeBrandValid(): boolean {
	return productBrand.value?.length! != 0;
}

function isRealTimePriceValid(): boolean {
	if (productName.value?.valueOf().trim() !== "") {
		if (!PRODUCT_REGEX.test(productPrice.value!) && productPrice.value! >= "0" || productPrice.value! < "0") {
			return false;
		}
		return true;
	}
	return false;
}

function isRealTimeStockValid(): boolean {
	if (productName.value?.valueOf().trim() !== "") {
		return !(productStock.value! < "0");
	}
	return true;
}

function addProduct(): void {
	if (validateForm()) {
		emit('addProduct', createProduct());
		resetForm();
	}
}

function editProduct(): void {
	if (validateForm()) {
		emit('editProduct', createProduct());
		resetForm();
	}
}

function createProduct(): Product {
	return {
		id: parseInt(productID.value!),
		name: productName.value!,
		description: productDescription.value!,
		brand: productBrand.value!,
		price: parseFloat(productPrice.value!),
		stock: parseInt(productStock.value!),
		productCategory: productCategory.value
	}
}

function validateForm(): boolean {
	return (isRealTimeIDValid() && isRealTimeNameValid() && isRealTimeDescriptionValid() && isRealTimeBrandValid() && isRealTimePriceValid() && isRealTimeStockValid());
}

function handleFormSubmission(): void {
	console.log(props.currentAction);
	switch (props.currentAction) {
		case ProductAction.ADD:
			addProduct();
			break;
		case ProductAction.EDIT:
			editProduct();
			break;
	}
}

function resetForm(): void {
	productID.value = ""
	productName.value = ""
	productDescription.value = "",
	productBrand.value = "",
	productPrice.value = "",
	productStock.value = "",
	productCategory.value = productCategories[0]
}
</script>

<template>
	<div class="border border-2 border-secondary-subtle rounded-4 p-4">
		<h1>{{ props.formTitle }}</h1>
	
		<form>
			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimeIDValid() }" class="form-label smooth-trans-300" for="product-id">ID du produit</label>
				<input v-model="productID" :class="{ 'is-invalid': !isRealTimeIDValid() }" class="border-2 rounded-2 form-control" type="number" id="product-id" placeholder="0" :disabled="currentAction === ProductAction.EDIT">
				<div class="invalid-feedback">L'ID du produit doit être un entier positif et unique.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimeNameValid() }" class="form-label mt-2 smooth-trans-300" for="product-name">Nom du produit</label>
				<input v-model="productName" :class="{ 'is-invalid': !isRealTimeNameValid() }" class="border-2 rounded-2 form-control" type="text" id="product-name" placeholder="...">
				<div class="invalid-feedback">Le nom du produit doit faire au moins 3 caractères.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimeDescriptionValid() }" class="form-label mt-2 smooth-trans-300" for="product-description">Description</label>
				<input v-model="productDescription" :class="{ 'is-invalid': !isRealTimeDescriptionValid() }" class="border-2 rounded-2 form-control" type="text" id="product-description" placeholder="...">
				<div class="invalid-feedback">La description est obligatoire.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimeBrandValid() }" class="form-label mt-2 smooth-trans-300" for="product-brand">Marque</label>
				<input v-model="productBrand" :class="{ 'is-invalid': !isRealTimeBrandValid() }" class="border-2 rounded-2 form-control" type="text" id="product-brand" placeholder="...">
				<div class="invalid-feedback">La marque est obligatoire.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimePriceValid() }" class="form-label mt-2 smooth-trans-300" for="product-price">Prix</label>
				<input v-model="productPrice" :class="{ 'is-invalid': !isRealTimePriceValid() }" class="border-2 rounded-2 form-control" type="text" id="product-price" placeholder="0.00$">
				<div class="invalid-feedback">Le prix doit être sous le format: 0.00.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isRealTimeStockValid() }" class="form-label mt-2 smooth-trans-300" for="product-stock">Inventaire</label>
				<input v-model="productStock" :class="{ 'is-invalid': !isRealTimeStockValid() }" class="border-2 rounded-2 form-control" type="number" id="product-stock" placeholder="0">
				<div class="invalid-feedback">Le stock doit être un entier positif ou nul.</div>
			</div>

			<div class="text-start my-2 mb-4">
				<label class="form-label mt-2 smooth-trans-300" for="product-category">Catégorie</label>
				<select v-model="productCategory" class="border-2 rounded-2 form-select" id="product-category">
					<option v-for="category in productCategories" :value="category">
						{{ category.name }}: {{ category.description }}
					</option>
				</select>
			</div>

			<div class="d-flex">	
				<ActionButton @click="handleFormSubmission()" class="w-100" :label="props.currentAction" :priority="buttonPriority!"></ActionButton>
			</div>
		</form>
	</div>
</template>

<style>
.smooth-trans-300 {
	transition-duration: 300ms;
}
</style>
