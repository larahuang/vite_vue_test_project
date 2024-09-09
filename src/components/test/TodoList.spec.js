
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe(' TodoList組件 取得以下陣列', () =>
{
    const todos = [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
    ]
    let wrapper
    if (typeof document !== 'undefined') {
        wrapper = mount(TodoList, {
            props: {
                todos: todos, 
            }
        })
    }
    it('渲染todo', () => {
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe('Learn Vue.js 3')
    })


 })