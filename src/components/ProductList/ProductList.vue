<script setup lang="ts">
import type { Product } from '../../models/Product';
import { ProductAction } from '../../models/ProductAction';
import ProductDisplay from './ProductDisplay.vue';
const props = defineProps<{
	products: Product[]
}>();
</script>

<template>
	<div class="border border-2 border-secondary-subtle rounded-4 mb-4 p-4">
		<h1>{{ ProductAction.LIST }}</h1>

		<div class="mt-4" v-if="products.length === 0">Aucun produit dans la liste pour l'instant.</div>
		<div class="mt-4" v-for="product in products">
			<ProductDisplay :product="product"></ProductDisplay>
		</div>
	</div>
</template>
