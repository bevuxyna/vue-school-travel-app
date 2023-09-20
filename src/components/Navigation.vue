<script setup>
import { ref } from "vue";
import sourceData from "@/data.json";
import AppLink from "./AppLink.vue";

const destinations = ref(sourceData.destinations);
</script>

<template>
  <div id="nav">
    <AppLink id="logo" to="/">Travel App</AppLink>

    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink to="/protected">Dashboard</AppLink>
  </div>
</template>
