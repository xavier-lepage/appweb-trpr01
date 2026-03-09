<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { productCategories, type ProductCategory } from '../../models/ProductCategory';
import ActionButton from '../ActionButton.vue';
import { Priority } from '../../models/Priority';
import type { Product } from '../../models/Product';
import { ProductAction } from '../../models/ProductAction';

const props = defineProps<{
	formTitle: string
	currentAction: ProductAction
	product?: Product
}>();

const emit = defineEmits(['addProduct', 'editProduct']);

//	Expression régulière conçue avec Regex101
const PRODUCT_REGEX = /^\d+\.\d{2}$/gm

const productID = ref<number>(0);
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
		case ProductAction.CLONE:
			return Priority.SECONDARY;
		case ProductAction.EDIT:
			return Priority.WARNING;
	}
});

const isProductNameValid = computed(() => {
	if (productName.value?.valueOf().trim() !== "") {
		if (productName.value?.length! < 3) {
			return false;
		}
		return true;
	}
	return false;
});

const isProductDescriptionValid = computed(() => {
	return productDescription.value?.length! != 0;
});

const isProductBrandValid = computed(() => {
	return productBrand.value?.length! != 0;
});

const isProductPriceValid = computed(() => {
	if (productName.value?.valueOf().trim() !== "") {
		if (!PRODUCT_REGEX.test(productPrice.value!) && productPrice.value! >= "0" || productPrice.value! < "0") {
			return false;
		}
		return true;
	}
	return false;
});

const isProductStockValid = computed(() => {
	if (productName.value?.valueOf().trim() !== "") {
		return !(productStock.value! < "0");
	}
	return true;
});

/*	Documentation utilisée pour watch:
	https://vuejs.org/guide/essentials/watchers.html#watch-source-types
	https://vuejs.org/guide/essentials/watchers.html#eager-watchers
*/
watch(
	() => props.product,
  	(product) => {
		if (product !== undefined) {
			if (props.currentAction === ProductAction.EDIT) {
				productID.value = product.id;
			}
			productName.value = product.name;
			productDescription.value = product.description;
			productBrand.value = product.brand;
			productPrice.value = product.price.toString();
			productStock.value = product.stock.toString();
			productCategory.value = product.productCategory;
		}
	},
	{ immediate: true }
);

function createProduct(): Product {
	return {
		id: productID.value,
		name: productName.value!,
		description: productDescription.value!,
		brand: productBrand.value!,
		price: parseFloat(productPrice.value!),
		stock: parseInt(productStock.value!),
		productCategory: productCategory.value
	}
}

function validateForm(): boolean {
	return (isProductNameValid.value && isProductDescriptionValid.value && isProductBrandValid.value && isProductPriceValid.value && isProductStockValid.value);
}

function handleFormSubmission(): void {
	if (validateForm()) {
		switch (props.currentAction) {
			case ProductAction.ADD:
				emit('addProduct', createProduct(), props.currentAction);
				break;
			case ProductAction.CLONE:
				emit('addProduct', createProduct(), props.currentAction);
				break;
			case ProductAction.EDIT:
				emit('editProduct', createProduct());
				break;
		}
		resetForm();
	}
}

function resetForm(): void {
	productID.value = 0;
	productName.value = "";
	productDescription.value = "";
	productBrand.value = "";
	productPrice.value = "";
	productStock.value = "";
	productCategory.value = productCategories[0];
}
</script>

<template>
	<div class="border border-2 border-secondary-subtle rounded-4 p-4">
		<h1>{{ props.formTitle }}</h1>
	
		<form>
			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isProductNameValid }" class="form-label mt-2 smooth-trans-300" for="product-name">Nom du produit</label>
				<input v-model="productName" :class="{ 'is-invalid': !isProductNameValid }" class="border-2 rounded-2 form-control" type="text" id="product-name" placeholder="...">
				<div class="invalid-feedback">Le nom du produit doit faire au moins 3 caractères.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isProductDescriptionValid }" class="form-label mt-2 smooth-trans-300" for="product-description">Description</label>
				<textarea v-model="productDescription" :class="{ 'is-invalid': !isProductDescriptionValid }" class="border-2 rounded-2 form-control" type="text" id="product-description" placeholder="..."></textarea>
				<div class="invalid-feedback">La description est obligatoire.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isProductBrandValid }" class="form-label mt-2 smooth-trans-300" for="product-brand">Marque</label>
				<input v-model="productBrand" :class="{ 'is-invalid': !isProductBrandValid }" class="border-2 rounded-2 form-control" type="text" id="product-brand" placeholder="...">
				<div class="invalid-feedback">La marque est obligatoire.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isProductPriceValid }" class="form-label mt-2 smooth-trans-300" for="product-price">Prix</label>
				<input v-model="productPrice" :class="{ 'is-invalid': !isProductPriceValid }" class="border-2 rounded-2 form-control" type="text" id="product-price" placeholder="0.00$">
				<div class="invalid-feedback">Le prix doit être sous le format: 0.00.</div>
			</div>

			<div class="text-start my-2">
				<label :class="{ 'text-danger-emphasis': !isProductStockValid }" class="form-label mt-2 smooth-trans-300" for="product-stock">Inventaire</label>
				<input v-model="productStock" :class="{ 'is-invalid': !isProductStockValid }" class="border-2 rounded-2 form-control" type="number" id="product-stock" placeholder="0">
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
				<ActionButton @click="handleFormSubmission()" class="w-100" :label="props.currentAction" :priority="buttonPriority"></ActionButton>
			</div>
		</form>
	</div>
</template>

<style>
.smooth-trans-300 {
	transition-duration: 300ms;
}
</style>
