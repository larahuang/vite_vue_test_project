<template>
  <h1 data-test="title" >{{ title }}</h1>
  <div class="card">
   <div style="margin-top: 35px;">
    <span>姓名: {{firstname}}</span> <br>
    <span>年齡: {{age}}</span> 

    </div>
    <div class="search_content">
     <label> Enter Firstname </label>
     <input type="text" 
     class="from_control"
      :value="search"
       @input="emitSearchValue"
     placeholder="搜尋姓名" 
     /> 
   <button 
   data-test="getAge"
   @click="getAge">獲取年齡</button>
   </div>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'

const props = defineProps({ 
  title: { type: String },
   search: { type: String },
})
    const emit = defineEmits(['update:search'])
    const emitSearchValue = (evt:any) =>{ 
        emit('update:search', evt.target.value)
    }
   // const search = ref<string>('');
    const age = ref<string>('');
    const firstname = ref<string>('');
    const getAge = () => { 
        fetch('https://api.agify.io/?name='+ props.search)
            .then(response => response.json())
          .then(data => {
              console.log(data)
                age.value = data.age
                firstname.value = data.name
                props.search=""
            })
    }
</script>