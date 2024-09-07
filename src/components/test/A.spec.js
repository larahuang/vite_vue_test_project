//引入描述、它、期望
import { describe, it, expect,expectTypeOf } from 'vitest'
//引入測試實用程式
import { mount } from '@vue/test-utils'
//引入元件
import AButton from '../A.vue'

describe('A標籤', () =>
{
    const href = 'https://ithelp.ithome.com.tw/'
  const target = '_blank'

    let wrapper
     if (typeof document !== 'undefined') {
        wrapper = mount(AButton, {
            props: {
                href: href,
                target: target
            }
        })
     }
     it('取得A標籤所有訊息，A標籤樣式是否包含link', () =>
     {
         if (typeof document !== 'undefined') {
             wrapper.find('[data-test="link"]').attributes()
             console.log('取得所有A標籤訊息', wrapper.find('[data-test="link"]').attributes())
             expect(wrapper.find('[data-test="link"]').classes()).toContain('link')
         }
    })
})