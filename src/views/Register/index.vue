<template>
    <link rel="stylesheet" href="/css/register.css">
    <el-header>
    <div class="logo">
        <a href="/"><img style="width: 200px" src="/imgs/cover.png" alt="logo" /></a>
    </div>
  </el-header>
  <div class="bg">
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
        class="ruleForm">
        <img src="/imgs/cover.png" alt="">
        <el-form-item prop="acc">
            <el-input v-model="ruleForm.acc" placeholder="请输入新账号" />
        </el-form-item>
        <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="请再次输入密码" />
        </el-form-item>
        <el-form-item prop="name">
            <el-input v-model.number="ruleForm.name" placeholder="请输入您的姓名" />
        </el-form-item>
        <el-form-item prop="email">
            <el-input v-model.number="ruleForm.email" placeholder="请输入您的电子邮件" />
        </el-form-item>
        <el-link type="primary" href="/login">使用现有账号登录</el-link>
        <el-form-item class="button">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                注册
            </el-button>
            
        </el-form-item>
    </el-form>
  </div>
    
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import router from '@/router/index'

const ruleFormRef = ref<FormInstance>()
const pattern_name: RegExp = /^[a-zA-Z0-9_]+$/;
const pattern_pass: RegExp = /^[a-zA-Z0-9_@]+$/;
const pattern_email: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;



// 账号验证
const validateAcc = (rule:any, value:any, callbace: any) =>{
    if (value === ''){
        callbace(new Error('账号为空'))
    }
    else if (!pattern_name.test(value)){
        callbace(new Error('账号只能包含字母、数字、下划线'))
    }
    else {
        callbace()
    }
}

// 密码一次验证
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码为空'))
    } 
    if (!pattern_pass.test(value)){
        callback(new Error('密码只能包含字母、数字、下划线、@符号'))
    }
    else {
        callback()
    }
}

// 密码二次验证
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } 
    else if (value !== ruleForm.pass) {
        callback(new Error("两次输入的不一致！"))
    } 
    else if (!pattern_pass.test(value)){
        callback(new Error('密码只能包含字母、数字、下划线、@符号'))
    }
    else {
        callback()
    }
}

// 姓名验证
const validateName = (rule: any, value: any, callback: any)=>{
    if (value === ''){
        callback(new Error('姓名为空'))
    }
    else{
        callback()
    }
}

// 电子邮件验证
const validateEmail = (rule: any, value: any, callback: any)=>{
    if (value === ''){
        callback(new Error('email为空'))
    }
    if (!pattern_email.test(value)){
        callback(new Error('email格式不正确！'))
    }
    else{
        callback()
    }
}

// rules的基本类型
const ruleForm = reactive({
    acc: '',
    pass: '',
    checkPass: '',
    name: '',
    email: '',
})

// 表单的规则
const rules = reactive<FormRules<typeof ruleForm>>({
    // validator: 表单字段验证数据的方法(表单验证规则)
    // trigger: 验证逻辑的触发方式
    acc: [{validator: validateAcc, trigger: 'blur'}],
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    name: [{ validator: validateName, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
})


// 注册按钮
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            ElMessage.success("注册成功")
            router.push('/')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>