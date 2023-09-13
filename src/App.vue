<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <Navigation />

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
