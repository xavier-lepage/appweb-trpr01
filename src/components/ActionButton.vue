<script setup lang="ts">
import { computed } from 'vue';
import type { Priority } from '../models/Priority';

const props = defineProps<{
	label: string,
	priority: Priority,
}>();

const priority = computed<string>(() => `btn btn-${props.priority}`);
</script>

<template>
	<button type="button" :class="priority">
		{{ label }}
	</button>
</template>
