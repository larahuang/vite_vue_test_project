<template>
<a class="btn link A C B submit"
data-test="link" 
:href="href" :target="target">點擊</a>
</template>

<script setup lang="ts">
const props = defineProps({ 
    href: { type: String ,required: false },
    target: { type: String, required: false },
   
})

</script>