<script setup lang="ts">
import { ref } from 'vue';

//route information
const route = useRoute();
const { data } = await useFetch('https://bertakang.pythonanywhere.com/');

const fruitCards = data.value.fruit_cards;
const grapeCards = data.value.grape_cards;
const recipeCards = data.value.recipe_cards;

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
const navBool = ref<boolean>(false);

const openProductDropdown = () => {
  productDropdownBool.value = true;
  navBool.value = true;
};

const closeProductDropdown = () => {
  setTimeout(() => {
    productDropdownBool.value = false;
    navBool.value = false;
  }, 300);
}

const openFruitDropdown = () => {
  fruitdropdownBool.value = true;
}


const openGrapeDropdown = () => {
  grapedropdownBool.value = true;
}

//recipe dropdown
const recipeDropdownBool = ref<boolean>(false);

const openRecipeDropdown = () => {
  recipeDropdownBool.value = true;
  navBool.value = true;
};

const closeRecipeDropdown = () => {
  setTimeout(() => {
    recipeDropdownBool.value = false;
    navBool.value = false;
  }, 300);
}

//mobile menu
const toggleMobileMenu = () => {

  //toggle mobile menu button
  const mobileNav = document.querySelector('.navlinks');

  if (mobileNav) {
    const mobileNavDisplay = window.getComputedStyle(mobileNav).display;

    if (mobileNavDisplay === "none") {
      mobileNav.style.display = "flex";
    } else {
      mobileNav.style.display = "none";
    }
  }
  //toggle the background
  navBool.value = !navBool.value;
}
</script>

<template>
  <header>
    <div class="navbar" @click="closeDropdown()">
      <div class="wrapper">
        <div class="logo-wrapper">
          <img src="~/assets/logo-white.png" alt="White version of the BARI Produce logo.">
        </div>
      </div>
      <div class="mobile-navlinks-wrapper">
        <div class="mobile-navlinks">
          <button class="mobile-menu-btn" @click="toggleMobileMenu()">MENU</button>
        </div>
      </div>
      <Transition>
        <div class="navlinks-wrapper">
        <nav>
          <ul class="navlinks">
            <li><a @click.prevent="scrollToSection('home')">HOME</a></li>
            <li><a @click.prevent="scrollToSection('about')">ABOUT</a></li>
            <div class="dropdown">
              <li><a @click.prevent="scrollToSection('products')" @mouseover="openProductDropdown()">PRODUCT</a></li>
              <div class="primary-dropdown" @mouseleave="closeProductDropdown()">
                <Transition>
                  <div class="primary-link-wrapper" v-show="productDropdownBool">
                    <div class="primary-link" @mouseover="openFruitDropdown()">
                      <li>Fruits</li>
                    </div>
                    <Transition>
                      <div class="secondary-dropdown" v-show="fruitdropdownBool">
                        <li v-for="fruitCard in fruitCards" :to="'/product/' + fruitCard.type + '/' + fruitCard.name" :key="fruitCard.id"><NuxtLink>{{ fruitCard.name }}</NuxtLink></li>
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
                        <li  v-for="grapeCard in grapeCards" :to="'/product/' + grapeCard.type + '/' + grapeCard.name" :key="grapeCard.id"><NuxtLink>{{ grapeCard.name }}</NuxtLink></li>
                      </div>
                    </Transition>
                  </div>
                </Transition>
              </div>
            </div>
            <div class="dropdown" >
              <li><a @click.prevent="scrollToSection('recipes')" @mouseover="openRecipeDropdown()">RECIPES</a></li>
              <div class="primary-dropdown" @mouseleave="closeRecipeDropdown()"> 
                <div class="primary-link-wrapper" v-show="recipeDropdownBool">
                  <div class="primary-link">
                    <li v-for="recipeCard in recipeCards" :to="'/recipe/' + recipeCard.name" :key="recipeCard.id"><NuxtLink >{{ recipeCard.name }}</NuxtLink></li>
                  </div>
                </div>
              </div>
            </div>
            <li><a @click.prevent="scrollToSection('contact')">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      </Transition>
    </div>
    <Transition>
      <div class="primary-bg" v-show="navBool"></div>
    </Transition>
    <div class="nav-bg"></div>
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
  font-weight: bold;
  color: #FED1EB;
  list-style: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

li:hover {
  font-weight: bold;
  color: #7E315D;
  background-color: #FED1EB;
}

/*navbar*/
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  background: linear-gradient(to right, #aa5486, #7E315D);
  height: 100px;
  width: 100vw;
  z-index: 10000;
}

.nav-bg {
  display: none;
}

/* logo elements */
.wrapper {
  height: 100%;
  align-content: center;
  padding: 0px 32px;
}

.logo-wrapper {
  width: 150px;
}

/* mobile nav elements */
.mobile-menu-btn {
  display: flex;
  padding: 4px 12px;
  color: #7E315D;
  font-size: 24px;
  font-weight: 600;
  border: 1px solid #F9E4F0;
  border-radius: 20px;
  background-color: #F9E4F0;
}

.mobile-navlinks-wrapper {
  height: 100%;
  display: none;
  padding: 0px 32px;
}

.mobile-navlinks {
  display: flex;
  justify-content: end;
  align-self: center;
  width: 100%;
  height: fit-content;

}

/* regular nav elements */
.navlinks-wrapper {
  display: grid;
  height: 100%;
  align-content: center;
  padding: 0px 32px;
}

.navlinks {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 0;
  margin: 0px;
}

/* products dropdown */
.dropdown {
  display: flex;
  flex-direction: column;

}

.primary-bg {
  display: flex;
  position: fixed;
  background: linear-gradient(to bottom, #7a2756, transparent);
  top: 100px;
  height: 150%;
  width: 100%;
  z-index: 1000;
}

.primary-dropdown {
  display: flex;
  flex-direction: column;
  color: #FED1EB;
  text-transform: capitalize;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 100%;
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
  font-size: 20px;
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

@media screen and (max-width: 991px) {
  .navbar {
    background: none;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
  }

  .nav-bg {
    display: flex;
    background: linear-gradient(to right, #aa5486, #7E315D);
    height: 100px;
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 9999;
  }

  .primary-bg {
    background: linear-gradient(to bottom, #7a2756, transparent);
    top: 100px;

  }


  /* menu button */
  .mobile-navlinks-wrapper {
    display: flex;
  }

  /* navigation links */
  .navlinks-wrapper {
    grid-column: 1 / span 2;
    padding: 0px 16px;
    align-content: start;
  }

  .navlinks {
    display: none;
    height: 100%;
    flex-direction: column;
    text-align: right;
    padding: 12px 0px;
  }

  .navlinks>li {
    padding: 12px 0px;
    margin: 4px 0px;
    font-size: 20px;
  }

  /* dropdown menu items */
  .dropdown {
    display: flex;
  flex-direction: column;
    position: relative;
    margin: 0;

  }

.primary-dropdown {
  position: relative;
}

  .primary-link {
    margin: 4px 0px;
  }

  .primary-link>li {
    font-weight: normal;
    font-size: 18px;
  }

  .secondary-dropdown {
    margin-bottom: 4px;
  }
}

@media screen and (max-width: 667px) {}

@media screen and (max-width: 300px) {}
</style>
