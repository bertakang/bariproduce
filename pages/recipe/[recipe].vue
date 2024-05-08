<script setup lang="ts">
//layout selection
definePageMeta({
  layout: 'info'
})

//route parameters
const route = useRoute();
const { recipe } = route.params;
const product = route.params.recipe;

//get recipe data from API
async function getrecipeData() {
  const { data } = await useFetch('https://bertakang.pythonanywhere.com/');
  const recipesList = data.value.recipe_cards;

  for (let i = 0; i < recipesList.length; i++) {
    const recipeItem = recipesList[i];
    const name = recipeItem.name;

    if (product === name) {
      return recipeItem;
    }
  }
}

const recipeData = await getrecipeData();

const ingredients = recipeData.ingredients;
const directions = recipeData.directions;
const ingredientsList = ingredients.split('.').map(item => item.trim());
const directionsList = directions.split('.').map(item => item.trim());
</script>

<template>
    <section class="recipes-page">
      <div class="recipes-description">
        <div class="header">
          <h1>{{ recipeData.name }}</h1>
          <h2>{{ recipeData.time }}</h2>
        </div>
        <div class="recipe-ingredients">
          <h3>Ingredients</h3>
          <ul v-for="ingredient in ingredientsList" :key="ingredient">
            <li >{{ ingredient }}</li>
          </ul>
        </div>
        <div class="recipe-directions">
          <h3>Directions</h3>
          <ol>
            <li v-for="direction in directionsList" :key="direction">{{ direction }}</li>
          </ol>
        </div>
      </div>
    </section>
</template>

<style scoped>
 h2 {
        font-size: 22px;
        color: #FED1EB;
  margin: 0;
    }

h3 {
  color: #FED1EB;
  text-transform: uppercase;
  margin: 0;
}

p {

  margin: 0;
}
/* recipe content */
ul {
  list-style-type: circle;
  padding-left: 32px;
  margin: 0;
}

li{
  margin: 0;
  font-family: 'Archivo', sans-serif;
  padding-left:16px;
  color: #FED1EB;
}

ol {
  list-style-type: decimal;

  margin: 0;
}

.recipes-page {
  padding: 32px 32px;
}

.recipes-description {
  position:static;
  margin-top: 100px;
}

.recipe-ingredients {
  margin: 16px 0px;
}
.recipe-directions {
  margin-top: 16px;
}

</style>