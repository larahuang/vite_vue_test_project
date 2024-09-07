//引入描述、它、期望
import { describe, it } from 'vitest'
//引入測試實用程式
import { mount } from '@vue/test-utils'
//引入元件
import Content from '../Content.vue'

describe('Content', () =>
{
     let wrapper
    if (typeof document !== 'undefined') {
       wrapper = mount(Content)
    }
    it('渲染text', () =>{
        if (typeof document !== 'undefined') {
            wrapper.find('[data-test="content"]').text()
            console.log('渲染text',wrapper.find('[data-test="content"]').text())
        }
    })
    it('渲染Html', () =>{
        if (typeof document !== 'undefined') {
            wrapper.find('[data-test="content"]').html()
            console.log('渲染Html',wrapper.find('[data-test="content"]').html())
        }
    })
    
})