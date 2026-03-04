<script setup lang="ts">
import type { Product } from '../../models/Product';

const props = defineProps<{
	product: Product
}>();

const emit = defineEmits(['cloneProduct', 'editProduct']);
</script>

<template>
	<div class="d-flex justify-content-between text-start w-100 border border-2 border-secondary-subtle rounded-4 mt-4 p-4">
		<div>
			<div class="my-1"><span class="fw-bold">ID:</span> {{ props.product.id }}</div>
			<div class="my-1"><span class="fw-bold">Nom:</span> {{ props.product.name }}</div>
			<div class="my-1"><span class="fw-bold">Description:</span> {{ props.product.description }}</div>
			<div class="my-1"><span class="fw-bold">Marque:</span> {{ props.product.brand }}</div>
			<div class="my-1"><span class="fw-bold">Prix:</span> {{ props.product.price }}</div>
			<div class="my-1"><span class="fw-bold">Inventaire:</span> {{ props.product.stock }}</div>
			<div class="my-1"><span class="fw-bold">Catégorie:</span> {{ props.product.productCategory.name }}</div>
		</div>
		<div class="d-flex flex-column">
			<!-- Icônes trouvées sur FontAwesome:
			https://fontawesome.com/icons/clone?f=classic&s=regular
			https://fontawesome.com/icons/pen-to-square?f=classic&s=regular -->
			
			<button @click="emit('cloneProduct', props.product)" class="btn btn-secondary h-100 my-2">
				<img width="30px" height="30px" src="/src/assets/images/clone-regular-full.svg" alt="Dupliquer">
			</button>
			<button @click="emit('editProduct', props.product)" class="btn btn-warning h-100 my-2">
				<img width="30px" height="30px" src="/src/assets/images/pen-to-square-regular-full.svg" alt="Modifier">
			</button>
		</div>
	</div>
</template>
