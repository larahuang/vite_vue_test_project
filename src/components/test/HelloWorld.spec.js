//引入描述、它、期望
import { describe, it, expect,expectTypeOf } from 'vitest'
//引入測試實用程式
import { mount } from '@vue/test-utils'
//引入元件
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () =>
{
    //1+1 應該是2
  it('1+1 應該是2', () => {
    expect(1 + 1).toBe(2)
  })
    //正確渲染
  it('正確渲染', () =>
  {
   if (typeof document !== 'undefined') {
      const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
      expect(wrapper.text()).toContain('Hello Vitest')
   }
  })
    //在此測試檔案中使用 jsdom
  it('在此測試檔案中使用 jsdom', () =>
  {
    if (typeof document !== 'undefined') {
      //建立一個div
      const element = document.createElement('div')
      element.innerHTML = '<p>Hello, HTML!</p>'
      expect(element.innerHTML).toBe('<p>Hello, HTML!</p>')
    }
  })
})