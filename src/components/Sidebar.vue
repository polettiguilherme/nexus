<script setup>
import { RouterView } from 'vue-router';

const props = defineProps({
  width: {
    type: String,
    required: true 
  }
});
</script>

<template>
    <div :style="{ width: props.width }" class="bg-white border-r border-border h-screen fixed left-0 top-0 flex flex-col items-center py-8 gap-6">
        <div class="mb-10">
            <span>Nexus</span>
        </div>
        <nav class="flex flex-col space-y-3">
            <RouterLink to="/notes" class="flex items-center">
                <span>Notes</span>
            </RouterLink>
            
            <RouterLink to="/kanban" class="flex items-center">
                <span>Board</span>
            </RouterLink>

            <RouterLink to="/todo" class="flex items-center">
                <span>List</span>
            </RouterLink>
        </nav>  
    </div>
</template>