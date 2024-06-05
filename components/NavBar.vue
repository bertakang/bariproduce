<script setup lang="ts">
import { onMounted, ref } from "vue";

const productDropdownBool = ref<boolean>(false);
const fruitdropdownBool = ref<boolean>(false);
const grapedropdownBool = ref<boolean>(false);
const navBool = ref<boolean>(false);
const navBGBool = ref<boolean>(false);

//route information
const route = useRoute();
const { data } = await useFetch("https://bertakang.pythonanywhere.com/");

const fruitCards = data.value.fruit_cards;
const grapeCards = data.value.grape_cards;
const recipeCards = data.value.recipe_cards;

//navbar scroll behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth <= 991) {
    element.scrollIntoView({ behavior: "smooth" });
    navBool.value = false;
    navBGBool.value = false;
  } else {
    element.scrollIntoView({ behavior: "smooth" });
    navBool.value = true;
    navBGBool.value = false;
  }
};

//product dropdown
const openProductDropdown = () => {
  productDropdownBool.value = true;
  navBGBool.value = true;
};

const closeProductDropdown = () => {
  setTimeout(() => {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth;

    productDropdownBool.value = false;
    recipeDropdownBool.value = false;
    navBGBool.value = false;

    if (screenWidth <= 991) {
      navBool.value = false;
    } else {
      navBool.value = true;
    }
  }, 300);
};

const openFruitDropdown = () => {
  fruitdropdownBool.value = true;
};

const openGrapeDropdown = () => {
  grapedropdownBool.value = true;
};

//recipe dropdown
const recipeDropdownBool = ref<boolean>(false);

const openRecipeDropdown = () => {
  recipeDropdownBool.value = true;
  navBGBool.value = true;
};

//mobile menu
const toggleMobileMenu = () => {
  navBGBool.value = !navBGBool.value;
  navBool.value = !navBool.value;
};

onMounted(() => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth <= 991) {
    navBool.value = false;
  } else {
    navBool.value = true;
  }
});
</script>

<template>

    <div class="navbar">
      <div class="wrapper">
        <div class="logo-wrapper">
          <img
            src="~/assets/logo-white.png"
            alt="White version of the BARI Produce logo."
          />
        </div>
        <div class="mobile-navlinks-wrapper">
          <div class="mobile-navlinks">
            <button class="mobile-menu-btn" @click="toggleMobileMenu()">
              MENU
            </button>
          </div>
        </div>
      </div>
      <Transition>
        <div class="navlinks-wrapper" v-show="navBool">
          <nav>
            <ul class="navlinks">
              <li><a @click.prevent="scrollToSection('home')">HOME</a></li>
              <li>
                <a
                  @click.prevent="scrollToSection('about')"
                  @scroll="scrollToSection('about')"
                  >ABOUT</a
                >
              </li>
              <li>
                <div class="dropdown">
                  <li>
                    <a
                      @click.prevent="scrollToSection('products')"
                      @mouseover="openProductDropdown()"
                      >PRODUCT</a
                    >
                  </li>
                  <div class="primary-dropdown" @click="openProductDropdown()">
                    <Transition>
                      <div
                        class="primary-link-wrapper"
                        v-show="productDropdownBool"
                      >
                        <div
                          class="primary-link"
                          @mouseover="openFruitDropdown()"
                          @click="openFruitDropdown()"
                        >
                          <li>Fruits</li>
                        </div>
                        <Transition>
                          <div
                            class="secondary-dropdown"
                            v-show="fruitdropdownBool"
                          >
                            <ul
                              v-for="fruitCard in fruitCards"
                              :key="fruitCard.id"
                            >
                              <li>
                                <NuxtLink
                                  :to="`/product/Fruit/${fruitCard.name}`"
                                  >{{ fruitCard.name }}</NuxtLink
                                >
                              </li>
                            </ul>
                          </div>
                        </Transition>
                      </div>
                    </Transition>
                    <Transition>
                      <div
                        class="primary-link-wrapper"
                        v-show="productDropdownBool"
                      >
                        <div
                          class="primary-link"
                          @mouseover="openGrapeDropdown()"
                          @click="openGrapeDropdown()"
                        >
                          <li>Grapes</li>
                        </div>
                        <Transition>
                          <div
                            class="secondary-dropdown"
                            v-show="grapedropdownBool"
                          >
                            <ul v-for="grapeCard in grapeCards">
                              <li>
                                <NuxtLink
                                  :to="`/product/Grape/${grapeCard.name}`"
                                  >{{ grapeCard.name }}</NuxtLink
                                >
                              </li>
                            </ul>
                          </div>
                        </Transition>
                      </div>
                    </Transition>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <li>
                    <a
                      @click.prevent="scrollToSection('recipes')"
                      @mouseover="openRecipeDropdown()"
                      >RECIPES</a
                    >
                  </li>
                  <div class="primary-dropdown" @click="openRecipeDropdown()">
                    <div
                      class="primary-link-wrapper"
                      v-show="recipeDropdownBool"
                    >
                      <div class="primary-link">
                        <ul v-for="recipeCard in recipeCards">
                          <li>
                            <NuxtLink :to="`/Recipe/${recipeCard.name}`">{{
                              recipeCard.name
                            }}</NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a @click.prevent="scrollToSection('contact')">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
    <Transition>
      <div
        class="primary-bg"
        v-show="navBGBool"
        @click="closeProductDropdown()"
      ></div>
    </Transition>
    <div class="nav-bg"></div>
</template>



<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  padding: 4px 0px;
  font-family: "Archivo", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #fed1eb;
  list-style: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

li:hover {
  font-weight: bold;
  color: #7e315d;
  background-color: #fed1eb;
}

/*navbar*/
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  background: linear-gradient(to right, #aa5486, #7e315d);
  height: 100px;
  width: 100vw;
  z-index: 10;
}

.nav-bg {
  display: none;
}

/* logo elements */
.wrapper {
  display: flex;
  height: 100%;
  padding: 0px 32px;
  align-self: center;
}

.logo-wrapper {
  display: flex;
  width: 150px;
  align-items: center;
  height: 100%;
}

/* mobile nav elements */
.mobile-menu-btn {
  display: none;
}

.mobile-navlinks-wrapper {
  display: none;
}

/* regular nav elements */
.navlinks-wrapper {
  display: grid;
  height: 100%;
  align-content: center;
  padding: 0px 32px;
}

.navlinks {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  padding-left: 0;
  margin: 0px;
  align-items: center;
}

.navlinks > li {
  display: flex;
  width: 100%;
  justify-content: center;
}

/* products dropdown */
.dropdown {
  display: flex;
  flex-direction: column;
}

.dropdown > li {
  display: flex;
  width: 100%;
  justify-content: center;
}

.primary-bg {
  display: flex;
  position: fixed;
  background: linear-gradient(to bottom, #7a2756, transparent);
  top: 100px;
  height: 150%;
  width: 100%;
  z-index: 5;
}

.primary-dropdown {
  display: flex;
  flex-direction: column;
  color: #fed1eb;
  text-transform: capitalize;
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 100%;
}

.primary-dropdown li {
  display: flex;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration-color: #fed1eb;
}

.secondary-dropdown {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 16px;
}

.secondary-dropdown li {
  display: flex;
  font-size: 20px;
  font-weight: normal;
  text-transform: capitalize;
}

/*transitions*/
.v-enter-active,
.v-leave-active {
  transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (max-width: 991px) {
  ul {
    margin: unset;
    padding: unset;
  }

  li {
    justify-self: right;
  }

  .navbar {
    height: 64px;
  }

  .wrapper {
    height: 100%;
    align-content: center;
    padding: 0px 32px;
  }
  /* mobile navigation links */
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 64px;
    width: 100%;
    padding: 0px 0px;
  }

  .logo-wrapper {
    height: fit-content;
    margin: 0px 16px;
    width: 100px;
  }

  .mobile-navlinks-wrapper {
    display: flex;
    position: static;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: end;
  }

  .mobile-navlinks {
    display: flex;
    margin: 0px 16px;
    width: fit-content;
    height: fit-content;
  }

  .mobile-menu-btn {
    display: flex;
    padding: 4px 12px;
    color: #fed1eb;
    font-size: 20px;
    font-weight: 600;
    background-color: transparent;
  }

  .mobile-menu-btn:hover {
    color: #7e315d;
    border-radius: 20px;
    background-color: #f9e4f0;
  }

  /* navigation links */
  .navlinks-wrapper {
    display: flex;
    top: 64px;
    position: absolute;
    right: 0px;
    padding: 0px 16px;
    align-content: end;
  }

  .navlinks {
    display: flex;
    position: static;
    width: fit-content;
    height: fit-content;
    max-height: calc(100vh - 64px);
    flex-direction: column;
    text-align: right;
    padding: 12px 0px;
    right: 0;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .navlinks::-webkit-scrollbar {
    display: none;
  }

  .navlinks > li {
    display: flex;
    width: 100%;
    padding: 12px 0px;
    margin: 4px 0px;
    font-size: 20px;
    text-align: right;
    justify-content: end;
  }

  /* dropdown menu items */
  .dropdown {
    display: flex;
    flex-direction: column;
    position: static;
    margin: 0;
    padding: 12px 0px;
    width: 100%;
  }

  .dropdown > li {
    display: flex;
    justify-content: end;
  }

  .primary-dropdown {
    display: flex;
    position: static;
    justify-content: end;
  }

  .primary-link {
    margin: 4px 0px;
  }

  .primary-link > li {
    font-weight: normal;
    font-size: 18px;
  }

  .secondary-dropdown {
    display: flex;
    margin-bottom: 4px;
  }

  .secondary-dropdown li {
    display: flex;
    justify-content: end;
  }

  /* background color items */
  .nav-bg {
    display: flex;
    background: linear-gradient(to right, #aa5486, #7e315d);
    height: 64px;
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 3;
  }

  .primary-bg {
    background: linear-gradient(to bottom, #7a2756, transparent);
    top: 64px;
  }
}
</style>
