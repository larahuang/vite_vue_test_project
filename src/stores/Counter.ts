import { defineStore } from 'pinia';
import { ref,computed } from 'vue';
import axios from 'axios'

export const useCounterStore = defineStore('counter', ()=>
{
    const count = ref(0);

    //computed
    const doubleCount = computed(() =>
    {
       return count.value * 2
    })
    
    const addCount = () =>
    {
        count.value ++
    }
    const cardLists=ref([])
    const fetchApi = async() =>
    {
        try {
            const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
            cardLists.value = res.data;
        } catch (error) {
            console.log(error)
        }
     
    }
    //必須輸出 return 
    return {
        count,addCount,doubleCount,
        cardLists,fetchApi
    }
})