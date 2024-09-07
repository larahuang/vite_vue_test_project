import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Nav from '../Nav.vue'
//Nav.vue 從父元件frontLayout.vue獲得以下陣列
describe('Nav.vue 從父元素 frontLayout.vue 取得以下陣列', () =>
{ 
    const navLists = [
        { id_set: '001', title: 'Home', href: '/' ,icon: 'icon-location2' },
        { id_set: '002', title: 'List', href: '/list',icon: 'icon-cog' },
        { id_set: '003', title: 'Pinia', href: '/pinia',icon: 'icon-cog' },
    ]
    const pageNameActive = '001';
      let wrapper
    if (typeof document !== 'undefined') {
        wrapper = mount(Nav, {
            props: {
                navLists: navLists,
                pageNameActive: pageNameActive
            }
        })
    }
    
    it('navLists資料是否正確渲染訊息? ', () =>
    {
        if (typeof document !== 'undefined') {
            const items = wrapper.findAll('li');
            expect(items.length).toBe(items.length);
            expect(items[0].text()).toBe('Home');
            expect(items[1].text()).toBe('List');
            expect(items[2].text()).toBe('Pinia');
        }
       
      
    });
    it('Active 傳遞初始值時渲染', () => { 
         expect(pageNameActive).toMatch(pageNameActive);
    })

    it('點擊時發出當前資料的事件',  () =>
    { 
        if (typeof document !== 'undefined') {
            const items = wrapper.findAll('li');
            const button = wrapper.find('li');
            button.trigger('click');
            expect(pageNameActive).toMatch(items[0].id_set);
            expect(pageNameActive).toMatch(items[1].id_set)
            expect(pageNameActive).toMatch(items[2].id_set)
            expect(button.find('li.isActive'));
        }
    })
    it('按一下時檢索當前資料的事件', async () =>
    {
        if (typeof document !== 'undefined') {
            await wrapper.get('[data-test="button"]').trigger('click')
            expect(wrapper.emitted()).toHaveProperty('sendMenuClickActive')
        }
    })
})
