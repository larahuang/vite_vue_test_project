<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Count from '../../../components/Count.vue'
import TodList from '../../../components/TodoList.vue'
import todosType from '../../../types/nav'
 const count = ref<number>(0)
    const addCount = () =>{
        count.value++
    }

    const todos = ref<todosType[]>([
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
    ])
    const newTodo = ref<string>('')
    
    const createTodo = () => {
        console.log('test',newTodo.value)
        const query = {
            id: 2,
            text: newTodo.value,
            completed: false
        }

        todos.value.push(query)
        console.log('query', query)
            console.log('todos',todos.value)
    }
   const firstName = ref('')
const lastName = ref('')



</script>

<route lang="yaml">
   meta:
      layout: frontLayout
</route>

<template>
<div>列表</div>

<Count :count="count" @sendAddCount="addCount"/>

<TodList 
    :todos="todos"
    v-model:newTodo='newTodo'
    @sendCreateTodo ="createTodo"
    v-model:lastName='lastName'
    />
  <p> Last Name: {{ lastName }} </p>
</template>
