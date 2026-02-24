<script setup lang="ts">
import { ref } from 'vue';
import { Priority } from '../models/Priority';
import ActionButton from './ActionButton.vue';
import Header from './Header.vue';

const isAddComponentVisible = ref(false);

function showAddComponentForm(): void {
	isAddComponentVisible.value = true;
}
</script>

<template>
<div class="container">
	<Header></Header>

	<ActionButton v-on:click="showAddComponentForm()" :label="'Ajouter un composant'" :priority="Priority.SECONDARY"></ActionButton>
</div>
</template>

<style>

</style>