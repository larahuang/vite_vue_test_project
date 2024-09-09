import { describe, it, expect, afterEach, beforeAll, afterAll, beforeEach } from 'vitest'
 import { setupServer } from 'msw/node'
import { mount } from "@vue/test-utils"
import Count from "../Count.vue"


describe('count', () =>
{
    let wrapper
    const count = 1;
    if (typeof document !== 'undefined') {
        beforeEach(() =>
        {
            wrapper = mount(Count, {
                props: {
                    count: count,
                }
            })
        })
    }
    it("Count 元件 props count", async () =>
    { 
        if (typeof document !== 'undefined') {
            expect(wrapper.find('[data-test="count"]').text()).toBe(count.toString());
             
        }
    });
    it("count 加 1", async () =>
    { 
        if (typeof document !== 'undefined') {
             expect(Number(wrapper.find('[data-test="count"]').text()) +1).toBe(2);
            
        }
    });
   
    it('快照 UI 測試', () =>
    {
        if (typeof document !== 'undefined') {
            const wrapper = mount(Count, {});
            expect(wrapper.text()).toMatchSnapshot()
        }
    })
    it("找到按鈕", () =>
    {
        if (typeof document !== 'undefined') {
          
            expect(wrapper.find('[data-test="addCount"]').exists()).toBe(true);
        }
    });

    it("按鈕點擊", async () =>
    {
        if (typeof document !== 'undefined') {
            await wrapper.find('[data-test="addCount"]').trigger("click")
            console.log('wrapper.emitted()',wrapper.emitted())
            expect(wrapper.emitted()).toHaveProperty('sendAddCount')
             console.log('wrapper.emitted()', expect(wrapper.emitted()).toHaveProperty('sendAddCount'))
        }
    })
})


