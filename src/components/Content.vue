<template>
<div data-test="content">
    Root
    <childComponent :title="title"/>
    <childComponent :title="title"/>
    <div>
        <ul>
            <li>a</li>
            <li>b</li>
        </ul>
    </div> 
</div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'
import childComponent from './Test.vue'
const title =ref<string>('這是測試')
</script>