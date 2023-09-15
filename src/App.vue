<script setup>
import { useRoute } from "vue-router";
import Navigation from "@/components/Navigation.vue";

const route = useRoute();
</script>

<template>
  <Navigation />

  <div class="container">
    <router-view :key="route.path"></router-view>
  </div>
</template>

<style scoped></style>
