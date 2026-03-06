<script setup lang="ts">
import { computed } from 'vue';
import { Priority } from '../../models/Priority';
const props = defineProps<{
	stock: number
}>();

const stockIndicatorPriority = computed(() => {
	if (props.stock <= 3) {
		return Priority.DANGER;
	}
	else if (props.stock <= 5) {
		return Priority.WARNING;
	}
	else {
		return Priority.SUCCESS;
	}
});
</script>

<template>
	<span 
		:class="`border-${stockIndicatorPriority} bg-${stockIndicatorPriority}-subtle text-${stockIndicatorPriority} `" 
		class="d-flex align-items-center text-center border border-1 border-opacity-50 me-3 px-3 py-1 rounded-pill">
			Inventaire: {{ props.stock }}
	</span>
</template>
