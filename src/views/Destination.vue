<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const destination = ref(null);

const denstinationId = computed(() => {
  return parseInt(route.params.id);
});

// const destination = computed(() => {
//   return sourceData.destinations.find(
//     (destination) => destination.id === denstinationId.value
//   );
// });

const getData =() => {
  fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
    .then((response) => response.json())
    .then((data) => (destination.value = data));
};

onBeforeMount(() => {
  destination.value = getData();
});
</script>

<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
