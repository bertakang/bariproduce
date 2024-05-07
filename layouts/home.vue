<script>
import NavBar from '~/components/NavBar.vue';
import Contact from '~/components/Contact.vue';

export default {
  components: { NavBar, Contact }
}
</script>

<template>
    <div>
      <NavBar />
      <slot />
      <Contact />
    </div>
</template>

  
  