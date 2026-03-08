<script setup lang="ts">
import type { Product } from '../../models/Product';
import StockIndicator from './StockIndicator.vue';

const props = defineProps<{
	product: Product
}>();

const emit = defineEmits(['cloneProduct', 'editProduct', 'deleteProduct']);
</script>

<template>
	<!-- Fortement inspiré de la documentation Boostrap:
		https://getbootstrap.com/docs/5.3/components/accordion/#always-open 
		https://getbootstrap.com/docs/5.3/utilities/shadows/
		https://getbootstrap.com/docs/5.2/utilities/overflow/ -->
	<div class="w-100 accordion">
		<div class="accordion-item border border-2 border-secondary-subtle rounded-4 overflow-hidden">
			<h2 class="accordion-header rounded-4 border-0 overflow-hidden">
				<button 
					class="accordion-button collapsed rounded-4 shadow-none overflow-hidden" 
					type="button" 
					data-bs-toggle="collapse" 
					:data-bs-target="`#product-${props.product.id}`" 
					:aria-controls="`product-${props.product.id}`">
					<div class="d-flex justify-content-between align-items-center w-100">
						<span 
							class="d-flex align-items-center">
								{{ props.product.name }}
						</span>
						<StockIndicator
							:stock="props.product.stock">
						</StockIndicator>
					</div>
				</button>
			</h2>
			<div :id="`product-${props.product.id}`" class="accordion-collapse collapse">
				<div class="accordion-body">
					<div class="d-flex justify-content-between text-start w-100 rounded-4">
						<div>
							<div class="my-1"><span class="fw-bold">ID:</span> {{ props.product.id }}</div>
							<div class="my-1"><span class="fw-bold">Nom:</span> {{ props.product.name }}</div>
							<div class="my-1"><span class="fw-bold">Description:</span> {{ props.product.description }}</div>
							<div class="my-1"><span class="fw-bold">Marque:</span> {{ props.product.brand }}</div>
							<div class="my-1"><span class="fw-bold">Prix:</span> {{ props.product.price }}$</div>
							<div class="my-1"><span class="fw-bold">Inventaire:</span> {{ props.product.stock }}</div>
							<div class="my-1"><span class="fw-bold">Catégorie:</span> {{ props.product.productCategory.name }}</div>
						</div>
						<div class="d-flex flex-column">
							<!-- Icônes trouvées sur FontAwesome:
							https://fontawesome.com/icons/clone?f=classic&s=regular
							https://fontawesome.com/icons/pen-to-square?f=classic&s=regular
							https://fontawesome.com/icons/trash-can?f=classic&s=regular -->
							
							<button @click="emit('cloneProduct', props.product)" class="btn btn-secondary h-100 my-2">
								<img width="30px" height="30px" src="/src/assets/icons/clone-regular-full.svg" alt="Dupliquer">
							</button>
							<button @click="emit('editProduct', props.product)" class="btn btn-warning h-100 my-2">
								<img width="30px" height="30px" src="/src/assets/icons/pen-to-square-regular-full.svg" alt="Modifier">
							</button>
							<button @click="emit('deleteProduct', props.product)" class="btn btn-danger h-100 my-2">
								<img width="30px" height="30px" src="/src/assets/icons/trash-can-regular-full.svg" alt="Supprimer">
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
