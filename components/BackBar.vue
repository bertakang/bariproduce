<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-back">
      <NuxtLink to="/">
        <button>&#8592; Back</button>
      </NuxtLink>
    </div>
  </div>
</template>



<style scoped>
.wrapper {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  background: linear-gradient(to right, #aa5486, #7E315D);
  position: fixed;
  padding: 0px 32px;
  z-index: 199999999999;
  top: 0;
}

@media screen and (max-width: 991px) {
.wrapper {
  height: 64px;
}
}
</style>
