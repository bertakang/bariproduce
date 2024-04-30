<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import FruitInfo from './../components/info/FruitInfo.vue';

const endpoint = window.location.pathname; 
const fruitName = endpoint.split('/').pop(); 
const fruit = ref<{ name: string, generalinfo: string, healthbenefits: string, PLUinfo: string, gallery: string[] } | null>(null);


onBeforeMount(async () => {
  try {
    const response = await useFetch('https://bertakang.pythonanywhere.com/fruit');
    const fruitInfo = response.data.fruit_info;
    
    let selectedFruit = null;

    for (let i = 0; i < fruitInfo.length; i++) {
      if (fruitName === fruitInfo[i].name) {
        selectedFruit = fruitInfo[i];
        console.log("Selected fruit:", selectedFruit.name, "fruitName from the API:", fruitName);
        
        break;
      }
    }

    fruit.value = selectedFruit; 
    console.log(fruit.value)
  } catch (error) {
    console.error('Error fetching fruit data:', error);
  }
});
</script>

<template>
  <div class="FruitsView">
    <FruitInfo v-if="fruit" :name="fruit.name" :generalinfo="fruit.generalinfo" :healthbenefits="fruit.healthbenefits"
      :PLUinfo="fruit.PLUinfo" :gallery="fruit.gallery" />
  </div>
</template>
