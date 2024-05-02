<script setup lang="ts">
import { useFetch } from '#app';

const { data } = await useFetch('https://bertakang.pythonanywhere.com/');
const recipeCards = data.value.recipe_cards;
</script>

<template>
  <div class="RecipeCard">
    <ul class="cards-wrapper">
      <NuxtLink v-for="card in recipeCards" :to="'/Grape/' + card.name" :key="card.id">
        <div class="card-wrapper">
          <div class="wrapper">
            <div class="header">
              <h3>{{ card.name }}</h3>
              <p>{{ card.type }}</p>
            </div>
            <div class="card-image">
              <img :src="'https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/' + card.file_path">
            </div>
            <div class="text-wrapper">
              <div class="card-description">
                <p>{{ card.description }}</p>
              </div>
              <div class="card-click">
                <p>Learn More &raquo;</p>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </ul>
  </div>
</template>

<style scoped>
/* general styles */
a {
  flex: 0 0 33.33%;
  color: #7E315D;
  width:100%;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h3 {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  font-size: 22px;
  margin: 0px;
  padding: 0px;
}

p {
  font-family: 'Archivo', sans-serif;
  font-size: 20px;
  line-height: 1.3;
  color: #FED1EB;
  margin: 0px;
  padding: 0px;
}

/*Grape Cards*/
.RecipeCard {
  display: flex;
  position: relative;
  width:100%;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top:100px;
}


.card-wrapper {
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #aa5486, #7E315D);
  color: #FED1EB;
  outline: 1px solid lightgray;
  border-radius: 20px;
  height: 100%;
  width: 100%;
}

.card-wrapper:hover {
  outline: 3px solid #FED1EB;
}

/* card details */
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px 16px;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image {
  margin: 8px 0px;
  height: 200px;
}

.card-description {
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-click {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  margin-top: 24px;
  font-weight: 600;
}

.card-click>p {
  color: rgb(70, 216, 70);
}


@media screen and (max-width: 991px) {
}

@media screen and (max-width: 750px) {
}

@media screen and (max-width: 300px) {
  
}
</style>
