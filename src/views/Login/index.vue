<template>
  <link rel="stylesheet" href="/css/login.css">
  <el-header>
    <div class="logo">
      <img style="width: 200px" src="/imgs/cover.png" alt="logo" />
    </div>
  </el-header>
  <div class="bg">
    <img src="/imgs/cover.png" alt="">
    <!-- <div class="title"><el-text type="default">登录</el-text></div> -->
    <el-input v-model="ID" style="width: 240px" placeholder="请输入账号" /><br>
    <el-input v-model="Password" style="width: 240px" type="password" placeholder="请输入密码" show-password />
    <br>
    <el-link type="primary" href="/register">注册账号</el-link>
    <el-link type="primary">忘记密码</el-link>
    <br>
    <el-button type="primary" @click="login">登录</el-button>
    
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router/index'

let ID = ref("")
let Password = ref("")

function login(){
}
</script>
