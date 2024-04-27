<script setup lang="ts">
import { ref, onMounted } from 'vue';

const jsonData = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('https://bertakang.pythonanywhere.com/');
    if (response.ok) {
      jsonData.value = await response.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <!-- Render the fetched JSON data -->
    <pre>{{ jsonData }}</pre>
  </div>
</template>
