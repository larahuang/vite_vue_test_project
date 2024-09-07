<script setup lang="ts">
import { ref,onMounted } from 'vue'
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

interface listType {
  UID?: string;
  category?: string;
  comment?: string;
  descriptionFilterHtml?: string;
  discountInfo?: string | any;
  editModifyDate?: string;
  endDate?: string;
  hitRate?: number;
  imageUrl?: string;
  masterUnit?: object;
  otherUnit?: object;
  showInfo?: object;
  showUnit?: string;
  sourceWebName?: string | any;
  sourceWebPromote?: string;
  startDate?: string | any;
  subUnit?: object;
  supportUnit?: object;
  version?: string;
  title?: string | any;
  webSales?: string;
}
const title=ref<string>('Guess User Age App')
const lists = ref<listType[]>([]);
const getData = async () => {
  try {
    const api = `${import.meta.env.VITE_API_URL}/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=200`;
    await axios.get(api)
    const res = await axios.get(api);
    // console.log('culture', res.data, typeof res.data[0].masterUnit
    //   , 'otherUnit', typeof res.data[0].otherUnit, 'showInfos', typeof res.data[0].showInfo);
    if (res.status === 200) {
      lists.value = res.data;
      console.log('culture',lists.value)
    }
   
  } catch (error) {
    console.log(error)
  }

}
onMounted(() => {
  getData();
})
</script>

<template>
  <router-view></router-view>
</template>

