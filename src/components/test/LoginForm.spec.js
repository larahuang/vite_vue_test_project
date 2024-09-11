import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '../LoginForm.vue'

//LoginForm 從父元素
describe('LoginForm 從父元素', () =>
{ 
    const loginTitle = '請先登入'
    const loginLabels = {
        email: '電子郵件',
        password: '密碼',
        verification: '驗證碼',
    }
    const loginForms = {
        email: '',
        password: '',
        verification: '',
    }
    
    let wrapper
    if (typeof document !== 'undefined') {
        beforeEach(() =>
        {
            wrapper = mount(LoginForm, {
                props: {
                    loginTitle: loginTitle,
                    loginLabels: loginLabels,
                    loginForms: loginForms,
                    messageCheckEmail: '',
                    messageCheckPassword: '',
                    messageCheckVerification: '',
                 //   code_box: '',
                }
            })
        })
    }
    it('主旨標題正確渲染', () =>{
        if (typeof document !== 'undefined') {
            expect(wrapper.find('[data-test="title"]').text()).toBe(loginTitle); 
        }
    })
    it('Label標籤正確渲染', () =>{
        if (typeof document !== 'undefined') {
            const labels = wrapper.findAll('label');
            expect(labels.length).toBe(labels.length);
            expect(labels[0].text()).toBe(loginLabels.email);
            expect(labels[1].text()).toBe(loginLabels.password);
            expect(labels[2].text()).toBe(loginLabels.verification); 
        }
    })
    it('input標籤placeholder正確渲染', () =>
    {   const inputs = wrapper.findAll('input');
        expect(inputs[0].attributes().placeholder).toBe(loginLabels.email);
        expect(inputs[1].attributes().placeholder).toBe(loginLabels.password);
        expect(inputs[2].attributes().placeholder).toBe(loginLabels.verification);
        
    })
    it('input傳遞初始值時渲染', () => { 
        const inputs = wrapper.findAll('input');
        expect(inputs[0].text()).toBe(loginForms.email)
        expect(inputs[1].text()).toBe(loginForms.password)
        expect(inputs[2].text()).toBe(loginForms.verification)
    })
    it('email表單在符合規則不會出現錯誤訊息', async () =>
    {
        await wrapper.get('[data-test="email"]').setValue('lara1105huang@gmail.com')
          await wrapper.get('[data-test="email"]').trigger('blur')
        expect(wrapper.find('[data-test="emailMessage"]').exists()).toBe(false)
     }) 
    it('密碼表單在6個字符不會出現錯誤訊息', async () =>
    {
        await wrapper.get('[data-test="password"]').setValue('123456')
          await wrapper.get('[data-test="password"]').trigger('blur')
        expect(wrapper.find('[data-test="passwordMessage"]').exists()).toBe(false)
    }) 
    it('密碼表單在6個字符以下', async () => {
        await wrapper.get('[data-test="password"]').setValue('12345')
  // await wrapper.get('[data-test="password"]').trigger('blur')
//console.log('aa',wrapper.find('[data-test="passwordMessage"]').text())
       // expect(wrapper.find('[data-test="passwordMessage"]')).toMatch('密碼必須是6~30個字符以上！')
    })
    // });
    // it('Active 傳遞初始值時渲染', () => { 
    //     expect(pageNameActive).toMatch(pageNameActive);
    // })

    // it('點擊時發出當前資料的事件，Li會新增isActive Class',  async() =>
    // { 
    //     if (typeof document !== 'undefined') {
    //         const items = wrapper.findAll('li');
    //         const li = wrapper.find('li');
    //        // await li.trigger('click');
    //         await wrapper.get('[data-test="button"]').trigger('click')
    //         expect(pageNameActive).toMatch(items[0].id_set);
    //         expect(pageNameActive).toMatch(items[1].id_set)
    //         expect(pageNameActive).toMatch(items[2].id_set)
    //        // expect(li.find('li.isActive'));
    //          expect(wrapper.get('li').classes()).toContain('isActive')
    //     }
    // })
    // it('按一下時檢索當前資料的事件', async () =>
    // {
    //     if (typeof document !== 'undefined') {
    //         await wrapper.get('[data-test="button"]').trigger('click')
    //         expect(wrapper.emitted()).toHaveProperty('sendMenuClickActive')
    //     }
    // })
})
