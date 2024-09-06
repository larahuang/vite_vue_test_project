<template>
<div class="nav_up_group">
    <div class="item"  
        v-for="(item,id_set) in navLists"         :key="id_set"
        :class="pageNameActive == item.id_set ? 'isMobileActive' : ''"
         @click="sendMenuClickActive(item)">
         <router-link :to="item.href"> 
            <i :class="item.icon"></i>
            <div> {{ item.title }}</div>
         </router-link>
    </div> 
</div>

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