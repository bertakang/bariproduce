<script setup lang="ts">
import RecipeCard from './cards/RecipeCards.vue';
const route = useRoute();
</script>

<template>
  <section id="recipes" >
      <div class="sticky">
        <div class="text-block">
          <h1>Recipes</h1>
          <p>We’ve included some of our favorite recipes, using fresh fruit. Our list includes everything from the
            old-fashioned to fresh new twists. Learn how to include peaches in a power smoothie or a tasty desert to help
            cool off in the summer. We’ve also included grandma’s own peach pie recipe.</p>
            
            <p>Mmm Mmm! Our other recipes will
            show you new ways to enjoy nectarines in a fresh fruit salad or add apricots for a sweet, savory chicken
            dinner.</p>
        </div>
      </div>
      <div class="scrollable">
        <RecipeCard></RecipeCard>
      </div>
    </section>
</template>

<style scoped>
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


.text-block {
  position:sticky;
  top:100px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  line-height: 38px;
}

.sticky {
  z-index: 1;
  font-family: 'Archivo', sans-serif;
  flex: 2;
}

.scrollable {
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #64264b;
  overflow-y: hidden;
  justify-content: center;
  padding: 8px 32px 8px 24px;
}

.scrollable.scroll {
  display: flex;
  flex-direction: row;
  flex: 1;
}

@media screen and (max-width: 991px) {
  .sticky {
  flex: 1;
}

.text-block {
  padding: 32px;
}

.scrollable {
  flex: 1;
}

.scrollable.scroll {
  flex-direction: row;
}

}

@media screen and (max-width: 667px) {
#recipes {
  display: flex;
  flex-direction: column;
}

.sticky {
  padding: 100px 0px;
}

.text-block {
  padding: 16px;
}

}


@media screen and (max-width: 300px) {}
</style>
