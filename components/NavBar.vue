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

//mobile menu
// const toggleMobileMenu = () => {
//   const menuButton = document.querySelector('.mobile-menu-btn');
//   const mobileNav = document.querySelector('nav');

//   menuButton?.addEventListener('click', () => {
//     if (mobileNav.style.display === 'none') {
//       mobileNav.style.display = 'block'; // Change display to 'block'
//     } else {
//       mobileNav.style.display = 'none'; // Change display to 'none'
//     }
//   });
// }


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
          <div class="mobile-menu-btn" @click="toggleMobileMenu()"><button>MENU</button></div>
        </div>
      </div>
      <div class="navlinks-wrapper">
        <nav>
          <ul class="navlinks">
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
    </div>
    <Transition>
      <div class="primary-bg" v-show="navBackgroundBool"></div>
    </Transition>
  </header>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  background: linear-gradient(to right, #aa5486, #7E315D);
  height: 100px;
  width: 100vw;
  z-index: 10000;

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
.mobile-navlinks-wrapper {
  height: 100%;
  display: none;
  padding: 0px 32px;
}

.mobile-navlinks {
  text-align: end;
  align-content: center;
  width: 100%;
}

/* regular nav elements */
.navlinks-wrapper {
  height: 100%;
  align-content: center;
  padding: 0px 32px;
  border: 2px solid aqua;
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
  position: absolute;
  margin-top: 16px;
}

.primary-bg {
  display: flex;
  position: fixed;
  background: linear-gradient(to bottom, #7a2756, transparent);
  top: 100px;
  height: 150%;
  width: calc(100vw - var(--scrollbar-width));
  z-index: 1000;
}

.primary-dropdown {
  display: flex;
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
  .navlinks-wrapper {
    display: none;
  }

  .mobile-navlinks-wrapper {
    display: flex;
  }

}

@media screen and (max-width: 667px) {}

@media screen and (max-width: 300px) {}
</style>
