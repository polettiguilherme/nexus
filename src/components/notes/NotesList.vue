<script setup>
import Button from '../ui/Button.vue';
</script>

<template>
    <div class="h-screen flex">
        <div class="w-80 border-r border-border bg-white flex flex-col">
            <div class="border-b border-border flex justify-center py-3 ">
                <Button> New Note </Button>
            </div>


            <div class="p-4">
                <p>Your notes will appear here.</p>
            </div>

            
        </div>
    </div>
</template>