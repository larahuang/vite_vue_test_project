<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div class="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4 bg-slate-900 p-8 pt-7">

  <div>
    <div class="text-xl font-medium text-white">ChitChat</div>
    <p class="text-white">You have a new message!</p>
  </div>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
