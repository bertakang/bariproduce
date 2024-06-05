<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Contact from './components/Contact.vue';


</script>

<template>
    <div>
      <NavBar />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Contact />
    </div>
  </template>

  <style src="@/static/base.css" lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
