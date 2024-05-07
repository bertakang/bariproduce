<script>
import Contact from '~/components/Contact.vue';
import BackBar from '~/components/BackBar.vue';

export default {
  components: { BackBar, Contact }
}
</script>

<template>
    <div>
      <BackBar />
            <slot />
      <Contact />
    </div>
</template>

  
  