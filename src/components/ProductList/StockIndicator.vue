<script setup lang="ts">
import { computed } from 'vue';
import { Priority } from '../../models/Priority';
const props = defineProps<{
	stock: number
}>();

const CRITICAL_STOCK_TRESHOLD: number = 3;
const LOW_STOCK_TRESHOLD: number = 5;

const stockIndicatorPriority = computed(() => {
	if (props.stock <= CRITICAL_STOCK_TRESHOLD) {
		return Priority.DANGER;
	}
	else if (props.stock <= LOW_STOCK_TRESHOLD) {
		return Priority.WARNING;
	}
	else {
		return Priority.SUCCESS;
	}
});
</script>

<template>
	<!-- Documentation utilisée pour éviter le retour à la ligne
	https://getbootstrap.com/docs/5.2/utilities/text/#text-wrapping-and-overflow -->
	<span 
		:class="`border-${stockIndicatorPriority} bg-${stockIndicatorPriority}-subtle text-${stockIndicatorPriority} `" 
		class="d-flex align-items-center text-center text-nowrap border border-1 border-opacity-50 mx-3 px-3 py-1 rounded-pill indicator-height">
			Inventaire: {{ props.stock }}
	</span>
</template>

<style>
.indicator-height {
	height: 28px;
}
</style>
