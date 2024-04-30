<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '#app';


const { data } = await useFetch('https://bertakang.pythonanywhere.com/')

const fruitCards = data.value.fruit_cards;

console.log("Fruit Cards Data:", fruitCards);
</script>

<template>
  <div class="test" v-for="fruit in fruitCards" :key="fruit.id">
    <p>{{ fruit.name }}</p>
    <p>{{ fruit.description }}</p>
  </div>

  <div class="fruitInfo">
    <div class="modal" v-if="modalVisible">
      <div class="container-image">
        <slot />
        <div class="exit"><button @click="toggleModal()"><img src="../../assets/images/btn-x.png" alt="Exit button"></button></div>
        <img v-if="selectedImage" :src="selectedImage" alt="Image" />
      </div>
    </div>
    <section class="fruitspage">
      <div class="fruits-description">
        <div class="fruits-sticky">
          <modal v-if="modalVisible"></modal>
        <div class="header">
          <h2>{{ props.name }}</h2>
        </div>
        <div class="general-information">
          <h4>Pack Style</h4>
          {{ props.generalinfo }}
        </div>
        <div class="general-information">
          <h4>Health Benefits</h4>
          {{ props.healthbenefits }}
        </div>
        <div class="general-information">
          <h4>PLU Information</h4>
          {{ props.PLUinfo }}
        </div>
        </div>
        
      </div>
      <div class="image-gallery">
        <template v-if="filePathsByfruitOption[props.name]">
          <li v-for="filePath in filePathsByfruitOption[props.name]" :key="filePath">
            <img :src="getImageUrl(filePath)" alt="Image" @click="openModal(filePath)" />
          </li>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped>
.test {
  display:flex;
  top:150px;
  position: relative;
}
</style>