<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  ...RouterLink.props,
});

const isExternal = computed(() => {
  return ((typeof to === "string") && to.startWith('http'));
});
</script>

<template>
  <a
  v-if="isExternal"
  :href="to"
  class="external-link"
  target="_blank"
  rel="noopener"
  >
  <slot></slot></a>
  <router-link v-bind="props" class="internal-link">
    <slot></slot>
  </router-link>
</template>
