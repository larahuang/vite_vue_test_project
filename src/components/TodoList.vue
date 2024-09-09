<script setup >
const props = defineProps({
    todos: { type: Object },
    newTodo: { type: String },
  lastNewTodoModifiers: {
      default: () => ({}),
      'no-whitespace': () => {}
  },
})
const emit = defineEmits(['update:newTodo','sendCreateTodo'])
    // const emitNewTodoValue = (evt) =>
    // { 
    //   let val = evt.target.value
    //   if (props.lastNewTodoModifiers['no-whitespace']) {
    //     val = val.replace(/\s/g, '')
    //   }
    //     emit('update:newTodo', val)
    // }
    //在簡化
    const emitNewTodoValue = (evt) =>{ 
        emit('update:newTodo', evt.target.value)
    }
    const sendCreateTodo = () =>{
        emit('sendCreateTodo')
    }
    //參考https://learnvue.co/articles/v-model-guide
</script>

<template>
   <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
    <input
      type="text"
      placeholder="Add"
      :value="newTodo"
      @input="emitNewTodoValue"
    />
    <button @click="sendCreateTodo">新增</button>
  </div>
  
</template>