<script setup lang="ts">
import { Priority } from '../models/Priority';
import ActionButton from './ActionButton.vue';
import Header from './Header.vue';
import ProductForm from './ProductForm/ProductForm.vue';
</script>

<template>
	<div class="container">
		<Header></Header>

		<ActionButton 
			data-bs-toggle="collapse" 
			data-bs-target="#productForm" 
			aria-expanded="false" 
			aria-controls="productForm" 
			:label="'Ajouter un composant'" 
			:priority="Priority.SECONDARY">
		</ActionButton>

		<div class="collapse" id="productForm">
			<ProductForm></ProductForm>
		</div>
	</div>
</template>

<style>

</style>
