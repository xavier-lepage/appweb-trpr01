<script setup lang="ts">
import { computed } from 'vue';
import { Priority } from '../models/Priority';

const props = defineProps<{
	label: string,
	priority?: Priority,
}>();

const DEFAULT_PRIORITY = Priority.PRIMARY;

const buttonPriority = computed<string>(() => {
	return `btn-${props.priority ?? DEFAULT_PRIORITY}`;
});
</script>

<template>
	<button type="button" class="btn" :class="buttonPriority">
		{{ label }}
	</button>
</template>
