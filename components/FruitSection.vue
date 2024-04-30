<script setup lang="ts">
import FruitCard from './cards/FruitCards.vue';
</script>


<template>
  <section id="Fruits">
    <div class="menu-header">
      <h2>Fruit Selection</h2>
    </div>
      <FruitCard></FruitCard>
  </section>
</template>

<style scoped>
#Fruits {
  display: flex;
  background-color: #64264b;
  flex-direction: column;
  min-height: 100vh;
  padding: 100px 32px;
}

button {
  padding: 4px 12px;
  color: #7E315D;
  font-weight: 600;
  border: 1px solid #F9E4F0;
  border-radius: 20px;
  background-color: #F9E4F0;
}

button:hover {
  padding: 4px 12px;
  color: #F9E4F0;
  font-weight: 600;
  border: 1px solid #F9E4F0;
  border-radius: 20px;
  background-color: #9E476D;
  cursor: pointer;
}

h2 {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #F9E4F0;
}

@media screen and (max-width: 991px) {

}

@media screen and (max-width: 667px) {
  #Fruits {
  padding: 100px 16px;
}
}

@media screen and (max-width: 300px) {}
</style>
