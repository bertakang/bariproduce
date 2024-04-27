<script setup lang="ts">
import { ref } from 'vue';

//navbar scroll behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

//product dropdown
const productDropdownBool = ref<boolean>(false);
const fruitdropdownBool = ref<boolean>(false);
const grapedropdownBool = ref<boolean>(false);
const navBackgroundBool = ref<boolean>(false);

const openProductDropdown = () => {
  productDropdownBool.value = true;
  navBackgroundBool.value = true;
};

const closeProductDropdown = () => {
  setTimeout(() => {
    productDropdownBool.value = false;
    navBackgroundBool.value = false;
  }, 300); 
}

const openFruitDropdown = () => {
  fruitdropdownBool.value = true;
}

const closeFruitandGrapeDropdown = () => {
  setTimeout(() => {
    fruitdropdownBool.value = false;
    grapedropdownBool.value = false;
    navBackgroundBool.value = false;
  }, 300); 
}

const openGrapeDropdown = () => {
  grapedropdownBool.value = true;
}

//recipe dropdown
const recipeDropdownBool = ref<boolean>(false);

const openRecipeDropdown = () => {
  recipeDropdownBool.value = true;
  navBackgroundBool.value = true;
};

const closeRecipeDropdown = () => {
  setTimeout(() => {
    recipeDropdownBool.value = false;
    navBackgroundBool.value = false;
  }, 300); 
}

</script>

<template>
  <header>
    <div class="navbar" @click="closeDropdown()">
      <div class="logo-wrapper">
        <img src="~/assets/logo-white.png" alt="White version of the BARI Produce logo.">
      </div>
      <nav>
        <ul class="nav-links-wrapper">
          <li><a @click.prevent="scrollToSection('home')">HOME</a></li>
          <li><a @click.prevent="scrollToSection('about')">ABOUT</a></li>
          <div>
            <li><a @click.prevent="scrollToSection('products')" @mouseover="openProductDropdown()">PRODUCT</a></li>
            <div class="dropdown" @mouseleave="closeProductDropdown()">
              <div class="primary-dropdown" @mouseleave="closeFruitandGrapeDropdown()">
                <Transition>
                  <div class="primary-link-wrapper" v-show="productDropdownBool">
                  <div class="primary-link" @mouseover="openFruitDropdown()">
                    <li>Fruits</li>
                  </div>
                  <Transition>
                    <div class="secondary-dropdown" v-show="fruitdropdownBool">
                    <li>Apricots</li>
                    <li>Persimmons</li>
                    <li>Plums</li>
                  </div>
                  </Transition>
                </div>
                </Transition>
                <Transition>
                  <div class="primary-link-wrapper" v-show="productDropdownBool">
                  <div class="primary-link" @mouseover="openGrapeDropdown()">
                    <li>Grapes</li>
                  </div>
                  <Transition>
                    <div class="secondary-dropdown" v-show="grapedropdownBool">
                    <li>Flames</li>
                    <li>Thomcords</li>
                  </div>
                  </Transition>
                </div>
                </Transition>
              </div>
            </div>
          </div>
          <div>
            <li><a @click.prevent="scrollToSection('recipes')" @mouseover="openRecipeDropdown()">RECIPES</a></li>
            <div class="dropdown" @mouseleave="closeRecipeDropdown()">
              <div class="primary-dropdown">
                <div class="primary-link-wrapper" v-show="recipeDropdownBool">
                  <div class="primary-link">
                    <li>Grandma's Peach Pie</li>
                    <li>Apricot Chicken</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <li><a @click.prevent="scrollToSection('contact')">CONTACT</a></li>
        </ul>
      </nav>
    </div>
    <Transition>
      <div class="primary-bg" v-show="navBackgroundBool"></div>
    </Transition>

  </header>
</template>



<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

li {
  padding: 4px 8px;
  font-family: 'Archivo', sans-serif;
  font-size: 20px;
  font-weight:bold;
  color: #FED1EB;
  list-style: none;
  margin: 0px 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
}

li:hover {
  font-weight: bold;
  color: #7E315D;
  background-color: #FED1EB;
  padding: 4px 8px; 
}

/*navbar*/

.navbar {
  background: linear-gradient(to right, #aa5486, #7E315D);
  display: flex;
  flex-direction: row;
  position: fixed;
  height:100px;
  width:100%;
  z-index: 900;
  align-items: center;
  justify-content: space-between;

}

.logo-wrapper {
  padding:0px 16px;
  width: 150px;
}

.nav-links-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0;
}

/* products dropdown */
.dropdown {
  display:flex;
  flex-direction: column;
  position: absolute;
  margin-top: 16px;
}

.primary-bg {
  display:flex;
  position: fixed;
  background: linear-gradient(to bottom, #7a2756, transparent);
  top: 100px;
  height: 150%;
  width: calc(100vw - var(--scrollbar-width));
}

.primary-dropdown {  
  display:flex;
  flex-direction: column;
  color: #FED1EB;
  text-transform: capitalize;
  transition: opacity 1s ease-in-out;
}

.primary-dropdown li {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration-color: #FED1EB;
}

.secondary-dropdown {
  margin-bottom: 12px;
  text-indent: 18px;
}
.secondary-dropdown li {
  font-size:20px;
  font-weight: normal;
  text-transform: capitalize;
  text-decoration: none;
}

.secondary-dropdown li:hover {
  outline: .5px solid #FED1EB;
}

/*transitions*/
.v-enter-active,
.v-leave-active {
  transition: opacity .75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
