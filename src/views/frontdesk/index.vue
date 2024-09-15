<script setup lang="ts">
  import { ref,onMounted, getCurrentInstance,watchEffect,watch,computed } from 'vue'
  import GuessAge from '../../components/GuessAge.vue'
  import Button from '../../components/A.vue'
import Alert from '../../components/Alert.vue'
import LoginForm from '../../components/LoginForm.vue'
import Drop from '../../components/Drop.vue'
import loginFormType from '../../types/forms'
const { proxy } = getCurrentInstance() as any
  const title = ref<string>('Guess User Age App')
  const href = ref<string>('https://ithelp.ithome.com.tw/')
  const target = ref<string>('_blank')
  const isOpnAlert = ref<boolean>(false)
  const alertWidth = ref<string>('550');
  const openAlert = () => {
    isOpnAlert.value = true;
  }
  const closeAlert = () => {
    isOpnAlert.value = false;
  }
const search = ref<string>('');

    //登入表單
    const loginTitle = ref<string>('請先登入')
    const loginLabels = ref<loginFormType>({
        email: '電子郵件',
        password: '密碼',
        verification: '驗證碼',
    })
    const loginForms = ref<loginFormType>({
        email: '',
        password: '',
        verification: '',
    })

    //電子郵件驗證
    const messageCheckEmail = ref<string>('')
    const errorCheckEmail= ref<boolean>(false);
    const checkEmail = () => {
      const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (loginForms.value.email == "") {
        messageCheckEmail.value = '電子郵件不能為空！';
        errorCheckEmail.value = true;
      } else if (loginForms.value.email?.search(regEmail) == -1) {
        messageCheckEmail.value = '電子郵件不符合規格！';
        errorCheckEmail.value = true;
      } else {
        messageCheckEmail.value = '';
        errorCheckEmail.value = false;
      }
      
    }
    //密碼表單驗證
    const messageCheckPassword = ref<string>('');
    const errorCheckPassword= ref<boolean>(false);
    const checkPassword = () => {
      const regPassword = /[a-zA-Z0-9]{6,30}/;
      if (loginForms.value.password == "") {
        messageCheckPassword.value = '密碼不能為空！';
        errorCheckPassword.value = true;
      } else if (loginForms.value.password?.search(regPassword) == -1) { 
        console.log(loginForms.value.password.length,regPassword)
        messageCheckPassword.value = '密碼必須是6~30個字符以上！'; 
        errorCheckPassword.value = true;
      } else {
        messageCheckPassword.value = '';
        errorCheckPassword.value = false;
      }
    }
    //驗證碼表單驗證
    const messageCheckVerification = ref<string>('');
    const errorCheckVerification= ref<boolean>(false);
    const checkVerification = () => {
      const regVerification = /[a-zA-Z0-9]{4}/;
      if (loginForms.value.verification == "") {
        messageCheckVerification.value = '驗證碼不能為空！';
        errorCheckVerification.value = true;
      } else if (loginForms.value.verification?.search(regVerification) == -1 ) { 
        messageCheckVerification.value = '驗證碼必須是4個字符以上！';
         errorCheckVerification.value = true;
      } else if (loginForms.value.verification !=code_box.value) { 
        messageCheckVerification.value = '驗證碼錯誤!';
         errorCheckVerification.value = true;
      } else {
        messageCheckVerification.value = '';
         errorCheckVerification.value =false;
      }
    }
    const code_box = ref<string>('')
    const generateCode =(length=4)=>{
        // let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let chars = "0123456789";
        let code = "";
        for (var i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        code_box.value=code;
    }
 //點擊獲得新的驗證碼
    const showCode =() => {
        generateCode();
    }
    const checkLoginForms =computed(()=>{
        if (loginForms.value.email == "" || loginForms.value.password == "" || loginForms.value.verification == "") {
            return true;
        } else if( messageCheckEmail.value!='' || messageCheckPassword.value!='' ||  messageCheckVerification.value!=''){
            return true;
        }else{
             return false;
        }
    })
    const loginSubmit = () => {
 
    }
    generateCode();
</script>

<route lang="yaml">
    meta:
      layout: frontLayout
</route>

<template>
<div  class="flex" style="justify-content: space-between;">
   <a class="btn link" @click.prevent="openAlert">打開</a>
  <Button :href="href" :target="target"/>
</div>
  


    <Teleport  to="body">
        <Alert
        :isOpnAlert="isOpnAlert"
        :alertWidth = "alertWidth"
        @sendCloseAlert ="closeAlert"
        />
      </Teleport>

      <LoginForm 
        :loginTitle="loginTitle"
        :loginLabels="loginLabels"
        :loginForms="loginForms"
        :messageCheckEmail="messageCheckEmail"
        @sendCheckEmail ="checkEmail"
        :messageCheckPassword="messageCheckPassword"
        @sendCheckPassword ="checkPassword"
        :messageCheckVerification=" messageCheckVerification"
        @sendCheckVerification ="checkVerification"
        :code_box="code_box"
        @sendShowCode ="showCode"
        :checkLoginForms="checkLoginForms"
        @sendLoginSubmit ="loginSubmit"
        :errorCheckEmail="errorCheckEmail"
        :errorCheckPassword="errorCheckPassword"
        :errorCheckVerification="errorCheckVerification"
      />
      <Drop/>
</template>
