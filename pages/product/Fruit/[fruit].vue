<script setup lang="ts">
//layout selection
definePageMeta({
  layout: 'info'
})

//route parameters
const route = useRoute()
const { fruit } = route.params
const product = route.params.fruit;

//get fruit data from API
async function getFruitData() {
  const { data } = await useFetch('https://bertakang.pythonanywhere.com/fruit');
  const fruitsList = data.value.fruit_info;

  for (let i = 0; i < fruitsList.length; i++) {
    const fruitItem = fruitsList[i];
    const name = fruitItem.name;

    if (product === name) {
      return fruitItem;
    }
  }
}

//get fruit images from api
async function getFruitImages() {
  const { data } = await useFetch('https://bertakang.pythonanywhere.com/images', {
    pick: ['fruit_images']
  });

  const imagesList = data.value.fruit_images;
  const fruitFilePaths = ref([]);

  for (let i = 0; i < imagesList.length; i++) {
    const fruitImage = imagesList[i];
    const fruitOption = fruitImage.fruit_options;

    if (product === fruitOption) {
      const fruitFilePath = fruitImage.file_path;
      fruitFilePaths.value.push(fruitFilePath);
    }
  }
  return fruitFilePaths.value;
}

const fruitData = await getFruitData();
const fruitImages = await getFruitImages();

//photo modal toggle

const getImageURL = (filePath) => {
  return 'https://bertakang.pythonanywhere.com/mysite/' + filePath;
}

const modalBool = ref<boolean>(false);
const modalImage = ref<string>('');

const toggleModal = () => {
  modalBool.value = !modalBool.value;
}

const openModal = (filePath) => {
  modalImage.value = getImageURL(filePath);
  console.log(modalImage.value);
  toggleModal();
}
</script>

<template>
  <div class="fruit-info">
    <div class="wrapper">
      <div class="wrapper-text">
        <div class="wrapper-header">
          <h1>{{ fruitData.name }}</h1>
        </div>
        <div class="fruit-details">
          <h3>Health Benefits</h3>
          <p>{{ fruitData.healthbenefits }}</p>
        </div>
        <div class="fruit-details">
          <h3>PLU Information</h3>
          <p>{{ fruitData.PLUinfo }}</p>
        </div>
        <div class="fruit-details">
          <h3>Pack Style</h3>
          <p>{{ fruitData.packstyle }}</p>
        </div>
      </div>
      <div class="wrapper-gallery">
        <h3>Photos</h3>
        <p>Click to enlarge.</p>
        <div class="wrapper-photos">
          <ul class="gallery" v-for="filePath in fruitImages">
            <li>
              <div class="photo">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <NuxtImg format="webp"  :src="getImageURL(filePath)" :alt="`${fruitData.name} - ${fruitData.packstyle}`"   @click="openModal(filePath)" />
=======
                <img :src="getImageURL(filePath)" alt="Image" @click="openModal(filePath)">
>>>>>>> parent of 3fac9c6 (seo stuff)
=======
                <img :src="getImageURL(filePath)" alt="Image" @click="openModal(filePath)">
>>>>>>> parent of 3fac9c6 (seo stuff)
=======
                <img :src="getImageURL(filePath)" alt="Image" @click="openModal(filePath)">
>>>>>>> parent of 3fac9c6 (seo stuff)
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal" v-if="modalBool">
      <div class="modal-photo">
        <slot />
        <div class="x-wrapper" @click="toggleModal()"><span class=x-btn>&times;</span></div>
        <img v-if="modalImage" :src="modalImage" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fruit-info {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  height: auto;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

ul {
  padding: 0;
}

li {
  list-style: none;
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

.wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  min-height: calc(100vh - 100px);
}

.wrapper-text {
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin: 32px 32px;
  position: sticky;
  top: 132px;
  flex: 2;
}

.wrapper-header {
  align-content: center;
  margin-bottom: 32px;
}

.wrapper-gallery {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #64264b;
  padding: 16px 24px;
}

.wrapper-photos {
  display: flex;
  flex-direction: column;
}

.gallery {
  margin-top: 8px;
  padding: 0;
  align-content: center;
}

.photo {
  height: 256px;
  cursor: pointer;
  margin: 0;
}

.photo:hover {
  outline: #FED1EB 2px solid;
}

.fruit-details {
  margin-bottom: 16px;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(100, 38, 75, 0.5);
}

.modal-photo {
  display: flex;
  flex-direction: column;
  height: 500px;
}

.x-wrapper {
  display: flex;
  justify-content: flex-end;
  font-size: 2em;
}

.x-btn {
  cursor: pointer;
  color: #FED1EB;
}

.x-btn:hover {
  color: #64264b;
}

@media screen and (max-width: 991px) {
  .fruit-info {
    display: flex;
    flex-direction: row;
  }

  .wrapper { 
    display:flex;
    flex-direction: column;
    margin-top: 100px;
    min-height: 100vh;
    height: auto;
  }

  .wrapper-text {
    top: 100px;
    position: static;
    height:auto;
    margin: 16px 16px;
  }

  .wrapper-gallery {
    flex-direction: column;
    background-color: #64264b;
    padding: 16px 16px;
    height: auto;
  }

  .wrapper-photos {
    display: flex;
    flex-direction: column;
  }

  .gallery {
    margin-top: 8px;
    padding: 0;
    align-content: center;
  }
}

@media screen and (max-width: 750px) {
  .modal-photo {
    height: auto;
    width: 100%;
  }
}

@media screen and (max-width: 300px) {
  .wrapper { 
    display: flex;
    flex-direction: column; /* Change to column direction */
    margin-top: 100px;
    min-height: 100vh;
  }

  .wrapper-text {
    top: 100px;
    position: relative;
    margin: 16px 16px;
  }

  .wrapper-gallery {
    flex-direction: column;
    background-color: #64264b;
    padding: 16px 16px;
  }

  .wrapper-photos {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the photos */
  }

  .gallery {
    margin-top: 8px;
    padding: 0;
    align-content: center;
  }
}

</style>