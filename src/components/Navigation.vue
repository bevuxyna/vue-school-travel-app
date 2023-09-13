<script setup>
import { ref } from "vue";
import sourceData from "@/data.json";

const destinations = ref(sourceData.destinations);
</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">Travel App</router-link>

    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>
