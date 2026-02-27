<script setup lang="ts">
import { ref } from 'vue'
import { productCategories, type ProductCategory } from '../../models/ProductCategory';
let props = defineProps<{
	formTitle: string
}>();

const productID = ref<number>()
const productName = ref<string>()
const productDescription = ref<string>()
const productPrice = ref<string>()
const productStock = ref<number>()
const productCategory = ref<ProductCategory>(productCategories[0])
</script>

<template>
	<div class="border border-2 border-secondary-subtle rounded-4 p-4">
		<h1>{{ props.formTitle }}</h1>
	
		<form>
			<div class="text-start my-2">
				<label class="my-2" for="product-id">ID du produit</label>
				<input v-model="productID" class="border-2 rounded-2 form-control" type="number" id="product-id" placeholder="0">
			</div>

			<div class="text-start my-2">
				<label class="my-2" for="product-name">Nom du produit</label>
				<input v-model="productName" class="border-2 rounded-2 form-control" type="text" id="product-name" placeholder="...">
			</div>

			<div class="text-start my-2">
				<label class="my-2" for="product-description">Description</label>
				<input v-model="productDescription" class="border-2 rounded-2 form-control" type="text" id="product-description" placeholder="...">
			</div>

			<div class="text-start my-2">
				<label class="my-2" for="product-price">Prix</label>
				<input v-model="productPrice" class="border-2 rounded-2 form-control" type="text" id="product-price" placeholder="0.00$">
			</div>

			<div class="text-start my-2">
				<label class="my-2" for="product-stock">Inventaire</label>
				<input v-model="productStock" class="border-2 rounded-2 form-control" type="number" id="product-stock" placeholder="0">
			</div>

			<div class="text-start my-2">
				<label class="my-2" for="product-category">Catégorie</label>
				<select v-model="productCategory" class="border-2 rounded-2 form-control" id="product-category">
					<option v-for="category in productCategories" :value="category">
						{{ category.name }}: {{ category.description }}
					</option>
				</select>
			</div>
		</form>
	</div>
</template>

<style>

</style>
