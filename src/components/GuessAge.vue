<template>
  <h1 data-test="title">{{ title }}</h1>
  <div class="card">
   <div style="width:400px;height:130px;margin-top:20px;border-style: dotted;" >
   <br>
    <span>Firsthand: {{firstname}}</span> <br>
    <span>Age: {{age}}</span> 

    </div>
     <label> Enter Firstname </label><br>
     <input type="text" v-model="search" style="font-size:20px;border-radius:10px; border:2px solid red"/> 
   <a style="width:50px;height: 50px; background:red;"
   data-test="getAge"
   @click="getAge">Guess Age</a>
    <input type="radio" value="pop"> <label>Save my data</label>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'

const props = defineProps({ 
        title:{type:String},
})
    const search = ref<string>('');
    const age = ref<string>('');
    const firstname = ref<string>('');
    const getAge =() => { 
        fetch('https://api.agify.io/?name='+ search.value)
            .then(response => response.json())
            .then(data => {
                age.value = data.age
                firstname.value = data.name
                search.value=""
            })
    }
</script>