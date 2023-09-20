<script setup>
import { ref } from 'vue';
import router from "@/router";
import { useRoute } from "vue-router";

const username = ref('');
const password = ref('');
const route = useRoute();

const login = () => {
    window.user = username;
    const redirectPath = route.query.redirect || '/protected';
    router.push(redirectPath);
}

</script>

<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input type="text" name="username" class="input" v-model="username" />
      <label for="password">Password</label>
      <input type="text" name="password" class="input" v-model="password" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>
