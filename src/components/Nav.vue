<template>
<div class="flex justify-center header">
   <a href="/me">  <b  class="flex justify-center"><h1>Lara Home</h1></b> </a>
</div>
<ul class="nav flex justify-center h-12 leading-10 border_bottom_solid_2 bg_c6e2ff">
    <li class="flex mx-2" 
        v-for="(item,id_set) in navLists" :key="id_set"
        :class="pageNameActive == item.id_set ? 'isActive' : ''"
         @click="sendMenuClickActive(item)"
    >
    <router-link :to="item.href" data-test="button" >   
        {{ item.title }}
    </router-link>    
    </li>
</ul>
</template>

<script setup lang="ts">
import {navType} from '../types/nav'
    const props = defineProps({ 
        pageNameActive:{type:String},
        navLists:{type:Object}
    })
    const emit = defineEmits(['sendMenuClickActive'])
    const sendMenuClickActive=(_item:navType)=>{
        emit('sendMenuClickActive',_item)
    }
</script>