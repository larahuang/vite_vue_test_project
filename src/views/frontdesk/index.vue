<script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import axios from 'axios'
  
  import GuessAge from '../../components/GuessAge.vue'
import Button from '../../components/A.vue'
import Alert from '../../components/Alert.vue'
  const href = ref<string>('https://ithelp.ithome.com.tw/')
  const target = ref<string>('_blank')
  const isOpnAlert = ref<boolean>(false)
const alertWidth = ref<string>('550');
  const openAlert = () => {
    isOpnAlert.value = true;
  }
  const closeAlert = () => {
    isOpnAlert.value = false;
  }

</script>

<route lang="yaml">
    meta:
      layout: frontLayout
</route>

<template>
<div class="flex" style="justify-content: space-between;">
   <a class="link" @click.prevent="openAlert">打開</a>
  <Button :href="href" :target="target"/>
</div>
  
  <GuessAge/>
    <Teleport  to="body">
        <Alert
        :isOpnAlert="isOpnAlert"
        :alertWidth = "alertWidth"
        @sendCloseAlert ="closeAlert"
        />
      </Teleport>
</template>
