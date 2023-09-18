<script setup>
import { ref } from 'vue';
import router from "@/router";

const username = ref('');
const password = ref('');

const login = () => {
    window.user = username;
    router.push({name: "protected"});
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
