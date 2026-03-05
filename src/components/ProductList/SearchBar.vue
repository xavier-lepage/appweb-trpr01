<script setup lang="ts">
const props = defineProps<{
	label: string
}>();
</script>

<template>
	<!-- Documentation utilisée pour le input group Bootstrap:
	https://getbootstrap.com/docs/5.2/forms/input-group/ -->
	<div class="w-100 input-group mb-3 mt-4">
		<span class="input-group-text rounded-start-4">
			<!-- Icône trouvée sur FontAwesome:
			https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid -->
			<img src="/src/assets/images/magnifying-glass-solid-full.svg" alt="Recherche" width="20px" height="20px" />
		</span>

		<input type="text" class="form-control rounded-end-4" :placeholder="label">
	</div>
</template>
