<template>
    <Nav 
    :navLists="navLists"
    :pageNameActive="pageNameActive"
    @sendMenuClickActive="menuClickActive"
    />   
<main>
    <KeepAlive>
        <router-view />
    </KeepAlive>
      
</main>
<footer>
    <div class="reserved">LaraHuang 版權所有</div>
</footer>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Nav from '../components/Nav.vue';

import {navType} from '../types/nav'

    const navLists = ref<navType[]>([
        { id_set: '001', title: 'Home', href: '/' ,icon: 'icon-location2' },
        { id_set: '002', title: 'List', href: '/list',icon: 'icon-cog' },
        { id_set: '003', title: 'Pinia', href: '/pinia',icon: 'icon-cog' },
    ])
    const pageNameActive=ref<string>('001');
    const menuClickActive =(item:navType)=>{
        // pageNameActive.value= localStorage.getItem('pageName')as string
        pageNameActive.value = item.id_set;
    }
</script>