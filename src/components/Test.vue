<template>
<div>
    {{ title }}
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
  const props = defineProps({ 
        title:{type:String},
})
</script>