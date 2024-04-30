<script>
export default {
  data() {
    return {
      fruitName: '',
    };
  },
  created() {
    this.fruitName = this.$route.params.fruit;
  },
};
</script>


<template>
  <div class="FruitsView">
    <FruitInfo v-if="fruit" :name="fruit.name" :generalinfo="fruit.generalinfo" :healthbenefits="fruit.healthbenefits"
      :PLUinfo="fruit.PLUinfo" :gallery="fruit.gallery" />
  </div>
</template>



<style scoped>
/* modal */
.exit {
  display:flex;
  height:48px;
  width:auto;
}

button {
  background-color: transparent;
  height:100%;
  width:100%;
}

.modal {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.container-image {
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 64vh;
  width: 64vw;
  object-fit: contain;
  padding: 16px;
  border-radius: 24px;
}

.image-container {
  display: flex;
  height: 100%;
  width: 100%;
}

/* recipe content */
ul {
  list-style-type: circle;
  padding-left: 64px;
}

ol {
  list-style-type: decimal;
  padding-left: 64px;
}

h2 {
  font-weight: 700;
}

h4 {
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.header {
  margin: 0px 0px 32px 0px;
}

.general-information {
  margin: 0px 0px 16px 0px;
}

.fruits-sticky {
  top:4rem;
  position: sticky;
}

.fruits-description {
  margin-top:0px;
  position: sticky;
  padding: 16px 32px 0px 32px;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: #7E315D;
}

/* gallery */
.image-gallery {
  z-index: 1;
  flex: 1;
  background-color: #A78895;
  padding: 16px;
  margin-top: 3.5rem;
}

.image-gallery li {
  width: auto;
  height: 400px;
  margin-bottom: 16px;
  list-style: none;
}

.image-gallery li:hover {
  outline: 3px solid #FED1EB;
  cursor: pointer;
}

.image {
  display: flex;
  margin-bottom: 16px;
}

.image:hover {
  outline: 3px solid bisque;
  
}

@media screen and (max-width: 667px) {
  .fruitspage {
    display: flex;
    flex-direction: column;
  }

  .fruits-description {
    margin-top: 3rem;
    padding: 16px 16px 0px 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #7E315D;
  }

  .image-gallery {
    z-index: 1;
    position: relative;
    background-color: #A78895;
    padding: 16px;
  }
}
</style>

