<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />

  <main class="wrapper__main">
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style>
@import '@/assets/base.css';
</style>
