<template>
  <!-- <div class="background-container"> -->
    <Header />
    <router-view />
  <!-- </div> -->
</template>

<script setup>
import Header from './components/Header.vue'
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<style scoped>
.background-container {
  background-image: url('assets/images.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; 
}

</style>
