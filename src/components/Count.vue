<template>
  <button class="link" data-test="addCount" @click.prevent="sendAddCount">Add</button>
  <p data-test="count">{{ count }}</p>
</template>

<script setup lang="ts">
    const props = defineProps({ 
        count:{type:Number},
    })
    const emit = defineEmits(['sendAddCount'])
    const sendAddCount=()=>{
        emit('sendAddCount')
    }
</script>
