<script setup lang="ts">
//layout selection
definePageMeta({
  layout: 'info'
})

//route parameters
const route = useRoute()
const { grape } = route.params
const product = route.params.grape;

//get grape data from API
async function getGrapeData() {
  const { data } = await useFetch('https://bertakang.pythonanywhere.com/grape');
  const grapesList = data.value.grape_info;

  for (let i = 0; i < grapesList.length; i++) {
    const grapeItem = grapesList[i];
    const name = grapeItem.name;

    if (product === name) {
      return grapeItem;
    }
  }
}

//get grape images from api
async function getGrapeImages() {
  const { data } = await useFetch('https://bertakang.pythonanywhere.com/images', {
    pick: ['grape_images']
  });

  const imagesList = data.value.grape_images;
  const grapeFilePaths = ref([]);

  for (let i = 0; i < imagesList.length; i++) {
    const grapeImage = imagesList[i];
    const grapeOption = grapeImage.grape_options;

    if (product === grapeOption) {
      const grapeFilePath = grapeImage.file_path;
      grapeFilePaths.value.push(grapeFilePath);
    }
  }
  return grapeFilePaths.value;
}

const grapeData = await getGrapeData();
const grapeImages = await getGrapeImages();

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
  <div class="grape-info">
    <div class="wrapper">
      <div class="wrapper-text">
        <div class="wrapper-header">
          <h1>{{ grapeData.name }}</h1>
        </div>
        <div class="grape-details">
          <h3>Health Benefits</h3>
          <p>{{ grapeData.healthbenefits }}</p>
        </div>
        <div class="grape-details">
          <h3>PLU Information</h3>
          <p>{{ grapeData.PLUinfo }}</p>
        </div>
        <div class="grape-details">
          <h3>Pack Style</h3>
          <p>{{ grapeData.packstyle }}</p>
        </div>
      </div>
      <div class="wrapper-gallery">
        <h3>Photos</h3>
        <p>Click to enlarge.</p>
        <div class="wrapper-photos">
          <ul class="gallery" v-for="filePath in grapeImages">
            <li>
              <div class="photo">
                <img :src="getImageURL(filePath)" alt="Image" @click="openModal(filePath)">
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
.grape-info {
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

.grape-details {
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
  .grape-info {
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