<template>
    <div>
      {{title}}
    </div>
</template>

<route>
{
    path: '/list/edit/:id',
    name: 'Lists',
    meta: {
        layout: 'frontLayout', 
    }
}
</route>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter()
      const title =ref<any>(route.params.id);
  onMounted(() => {
      const id = route.params.id;
      console.log('讀取動態參數id',id)
  })
</script>