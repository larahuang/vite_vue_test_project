<script setup lang="ts">
const props = defineProps({
    loginTitle: { type: String },
    loginLabels: { type: Object },
    loginForms: { type: Object },
    messageCheckEmail: { type: String },
    messageCheckPassword: { type: String },
    messageCheckVerification: { type: String },
    code_box: { type: String, required: true, },
    checkLoginForms: { type: Boolean },
    
    errorCheckEmail: { type: Boolean },
    errorCheckPassword: { type: Boolean },
    errorCheckVerification: { type: Boolean },
})
const emit = defineEmits(['sendCheckEmail','sendCheckPassword','sendCheckVerification','sendShowCode','sendLoginSubmit'])
const sendCheckEmail =()=>{
        emit('sendCheckEmail')
}
const sendCheckPassword =()=>{
        emit('sendCheckPassword')
}
const sendCheckVerification=()=>{
        emit('sendCheckVerification')
}
const sendShowCode= ()=>{
        emit('sendShowCode')
}
const sendLoginSubmit= ()=>{
        emit('sendLoginSubmit')
}
</script>

<template>
<div class="form login_form mt-5">
    <div class="text-center mb-3"><b>{{ loginTitle }}</b></div>
    <div class="input_item">
        <label>{{ loginLabels.email }}</label>
        <input type="text" 
        v-model="loginForms.email"
        @blur="sendCheckEmail" 
         :placeholder="loginLabels.email"
        :class="{error:errorCheckEmail}"
         />
         <div class="error_message">{{ messageCheckEmail }}</div>
    </div>
    
    <div class="input_item">
        <label>{{ loginLabels.password }}</label>
        <input type="password" 
        v-model="loginForms.password"
        @blur="sendCheckPassword"
         :class="{ error: errorCheckPassword }"
        :placeholder="loginLabels.password"/>
         <div class="error_message">{{ messageCheckPassword }}</div>
    </div>
    <div class="input_item verification" >
        <label>{{ loginLabels.verification }}</label>
        <input type="text" 
        @blur="sendCheckVerification"
         v-model="loginForms.verification"
         :class="{error:errorCheckVerification}"
        :placeholder="loginLabels.verification"/>
        <div class="codeBox">{{ code_box }}</div>
        <a class="btn_change">
            <i @click="sendShowCode" class="icon-spinner11"></i>
        </a>  
         <div class="error_message">{{ messageCheckVerification }}</div>
    </div>
    <div class="flex justify-center">
        <div class="flex w-64">
        <a class="btn cancel">取消</a>
        <a class="btn submit"
        @click="sendLoginSubmit"
         :class="{ disabled: checkLoginForms }"
        
        >送出</a>
        </div>
    </div>
</div>
</template>