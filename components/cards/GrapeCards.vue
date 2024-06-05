<script setup lang="ts">
import { useFetch } from '#app';

const route = useRoute();


const { data } = await useFetch('https://bertakang.pythonanywhere.com/', {
  pick: ['grape_cards']
});

const grapeCards = data.value.grape_cards;
</script>

<template>
  <div class="GrapeCard">
    <div class="cards-wrapper">
      <NuxtLink v-for="card in grapeCards" :key="card.id" :to="`/product/Grape/${card.name}`">
        <div class="card-wrapper">
          <div class="wrapper">
            <div class="header">
              <h1>{{ card.name }}</h1>
              <p>{{ card.type }}</p>
            </div>
            <div class="card-image">
              <NuxtImg format="webp"  :src="`https://bertakang.pythonanywhere.com/mysite/${card.file_path}`" :alt='card.name' loading="lazy" style="width: 100%; height: auto; object-fit: cover; align-self:center;" />
            </div>
            <div class="text-wrapper">
              <div class="card-description">
                <p>{{ card.description }}</p>
              </div>
              <div class="card-click">
                <p>Click to See More &raquo;</p>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>


<style scoped>
/* general styles */
a {
  flex: 0 0 33.33%;
  color: #7E315D;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h1 {
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

/*grape Cards*/
.GrapeCard {
  display: flex;
  position: relative;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
  padding: 0;
  width: 100%;
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
  height: 300px;
  overflow:hidden;
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
  color: #FED1EB;
}




@media screen and (max-width: 991px) {
  h1 {
    font-size: 28px;
    line-height: 1.2;
  }

  h2 {
    font-size: 22px;
  }

  h1 {
    line-height: 1.2;
    font-size: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.3;
  }

  .cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }

  button {
    width: max-content;
  }
}

@media screen and (max-width: 750px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }


}

@media screen and (max-width: 300px) {

}
</style>
