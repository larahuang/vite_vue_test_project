import { describe, it, expect, afterEach, beforeAll, afterAll, beforeEach } from 'vitest'
 import { setupServer } from 'msw/node'
import { mount } from "@vue/test-utils"
import GuessAge from "../GuessAge.vue"
//引入Api模擬
import { restHandlers }  from "../../mocks/handlers";

const server = setupServer(...restHandlers)
// 在所有測試之前啟動伺服器
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
//  所有測試後關閉伺服器
afterAll(() => server.close())
// 每次測試後重置處理程序“對於測試隔離很重要”
afterEach(() => server.resetHandlers())

describe('GuessAge', () =>
{
    let wrapper
    const title = 'Guess User Age App'
    if (typeof document !== 'undefined') {
        beforeEach(() =>
        {
            wrapper = mount(GuessAge, {
                props: {
                    title
                }
            })
        })
    }
    it("測試 GuessAge 元件 props title", async () =>
    { 
        if (typeof document !== 'undefined') {
            expect(wrapper.find('[data-test="title"]').text()).toBe(title);
             
        }
    });
    it("測試資料是否為函數", () =>
    {
        expect(typeof GuessAge.data).toBe("undefined");
    });
    it('快照 UI 測試', () =>
    {
        if (typeof document !== 'undefined') {
            const wrapper = mount(GuessAge, {});
            expect(wrapper.text()).toMatchSnapshot()
        }
    })
    it("找到按鈕", () =>
    {
        if (typeof document !== 'undefined') {
          
            expect(wrapper.find('[data-test="getAge"]').exists()).toBe(true);
        }
    });

    it("按鈕點擊", async () =>
    {
        if (typeof document !== 'undefined') {
            const ac = await wrapper.get('[data-test="getAge"]').trigger("click")
            expect(wrapper.vm.search).toEqual("")
        }
    })
})


