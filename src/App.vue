<script setup>
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router';
import { ref } from 'vue';


const sidebarWidth = ref('5rem');
</script>

<template>
  <Sidebar :width="sidebarWidth" />
  
  <main class="flex-1 overflow-auto" :style="{ marginLeft: sidebarWidth }">
    <RouterView/>
  </main>
</template>

<style>
:root {
  --sidebar-width: 5rem; 
}

.sidebar-collapsed {
  --sidebar-width: 3rem; 
}
</style>