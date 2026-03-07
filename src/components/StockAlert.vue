<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../models/Product';

const props = defineProps<{
	product: Product
}>();

const isShown = ref<boolean>(true);

function dismiss(): void {
	isShown.value = false;
}
</script>

<template>
	<!-- Fortement inspiré de la documentation Boostrap:
	https://getbootstrap.com/docs/5.3/components/alerts/#dismissing -->
	<div v-if="isShown" class="d-flex align-items-center text-start alert alert-danger alert-dismissible fade show rounded-4 mb-4" role="alert">
		<!-- Icône trouvée sur FontAwesome:
		https://fontawesome.com/icons/triangle-exclamation?f=classic&s=solid -->
		<img :src="`/src/assets/images/triangle-exclamation-solid-full-danger.svg`" class="me-2 pt-1" height="24px" width="24px" alt="Avertissement">
		<!-- Documentation utilisée pour éviter le retour à la ligne
		https://getbootstrap.com/docs/5.2/utilities/text/#text-wrapping-and-overflow -->
		<span class="fw-bold me-2 text-nowrap">
			{{ product.stock }} restant<span v-if="product.stock > 1">s</span>:
		</span> 
		
		<span>Le produit « {{ product.name }} » est presque épuisé.</span>

		<button @click="dismiss" type="button" class="rounded-4 pt-3 btn-close fs-5"></button>
	</div>
</template>
