<template>
  <div>
    <button @click="clickAdd">Add</button>
    <h1>{{ counter }}</h1>

  

  </div>
</template>

<route lang="yaml">
    meta:
      layout: frontLayout
</route>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import {storeToRefs } from 'pinia';
import { useCounterStore } from '../../stores/Counter';
const store = useCounterStore();
const { counter, cardLists } = storeToRefs(store);
 const { fetchApi, addCount } = store;

 const clickAdd = () => {
    addCount()
}
onMounted(() => {
    fetchApi();
});
</script>