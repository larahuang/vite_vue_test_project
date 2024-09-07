<script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import axios from 'axios'
  import GuessAge from '../../components/GuessAge.vue'
</script>

<route lang="yaml">
    meta:
      layout: frontLayout
</route>

<template>
  <GuessAge/>
</template>
