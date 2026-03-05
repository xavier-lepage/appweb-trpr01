<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Product } from '../../models/Product';
import { ProductAction } from '../../models/ProductAction';
import ProductDisplay from './ProductDisplay.vue';
import SearchBar from './SearchBar.vue';

const props = defineProps<{
	products: Product[]
}>();

const emit = defineEmits(['cloneProduct', 'editProduct', 'deleteProduct']);

const query = ref<string>("");

const displayedProducts = computed(() => {
	return props.products.filter((product) => product.name.toLowerCase().includes(query.value));
});

function updateSearch(newQuery: string): void {
	query.value = newQuery;
}
</script>

<template>
	<div class="border border-2 border-secondary-subtle rounded-4 mb-4 p-4">
		<h1>{{ ProductAction.LIST }}</h1>

		<SearchBar
			@updateSearch="updateSearch"
			:label="'Rechercher un produit...'">
		</SearchBar>

		<div class="mt-4" v-if="products.length === 0">Aucun produit dans la liste pour l'instant.</div>
		<div class="mt-4" v-if="displayedProducts.length === 0 && products.length !== 0">Aucun produit ne correspond à la recherche.</div>
		<div class="mt-4" v-for="product in displayedProducts">
			<ProductDisplay 
				@cloneProduct="product => emit('cloneProduct', product)" 
				@editProduct="product => emit('editProduct', product)" 
				@deleteProduct="product => emit('deleteProduct', product)" 
				:product="product">
			</ProductDisplay>
		</div>
	</div>
</template>
