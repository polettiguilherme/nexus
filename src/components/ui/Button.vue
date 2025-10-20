<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default', 
    validator: (value) => {
      return ['default', 'destroy', 'outline', 'secondary'].includes(value);
    }
  }
});

const emit = defineEmits(['click']);

// A computed property to dynamically calculate the CSS classes
const buttonClasses = computed(() => {
  // Base classes that apply to ALL buttons for a consistent look and feel
  const baseClasses = 'font-bold py-2 px-4 rounded-lg transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant-specific classes
  switch (props.variant) {
    case 'destroy':
      return `${baseClasses} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`;
    case 'outline':
      return `${baseClasses} bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500`;
    case 'secondary':
      return `${baseClasses} bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400`;
    case 'default':
    default:
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
  }
});

// Function to handle the click event
function handleClick(event) {
  emit('click', event);
}
</script>

<template>
  <button :class="buttonClasses" @click="handleClick">
    <!-- The <slot> allows you to pass content (like text or icons) into the button -->
    <slot></slot>
  </button>
</template>
