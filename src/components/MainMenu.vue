<script setup lang="ts">
import { Collapse } from 'bootstrap';
import { ref, onMounted, useTemplateRef } from 'vue';
import { Priority } from '../models/Priority';
import { ProductAction } from '../models/ProductAction';
import ActionButton from './ActionButton.vue';
import Header from './Header.vue';
import ProductForm from './ProductForm/ProductForm.vue';

/*	Documentation utilisée pour le collapse bootstrap:
	https://vuejs.org/guide/essentials/template-refs
	https://vuejs.org/api/composition-api-lifecycle.html#onmounted
	https://getbootstrap.com/docs/5.3/components/collapse/#via-javascript
*/

const currentAction = ref<ProductAction>(ProductAction.NONE);
const formTitle = ref<string>('Ajouter un composant');
const productForm = useTemplateRef("productForm");
let collapse: Collapse;

onMounted(() => {
	if (productForm.value !== null) {
		collapse = new Collapse(productForm.value, { toggle: false });
	}
});

function toggleAddProductForm(): void {
	manageProductFormVisibility(ProductAction.ADD)
}

function manageProductFormVisibility(newAction: ProductAction): void {
	if (currentAction.value === newAction) {
		collapse.hide();
		currentAction.value = ProductAction.NONE
	} else {
		formTitle.value = newAction
		collapse.show();
		currentAction.value = newAction
	}
}
</script>

<template>
	<div class="container">
		<Header></Header>

		<ActionButton
			class="mx-2 my-4"
			@click="toggleAddProductForm()" 
			:label="'Ajouter un composant'" 
			:priority="Priority.PRIMARY">
		</ActionButton>

		<div class="collapse" ref="productForm">
			<ProductForm :formTitle="formTitle"></ProductForm>
		</div>
	</div>
</template>
