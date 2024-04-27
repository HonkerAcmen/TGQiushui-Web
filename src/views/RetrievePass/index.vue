<template>
  <link rel="stylesheet" href="/css/retrieve.css">
  <el-header>
    <div class="logo">
      <a href="/"><img style="width: 200px" src="/imgs/cover.png" alt="logo" /></a>
    </div>
  </el-header>
  <el-steps class="steps" style="max-width: 600px" :active="RetrievePassStore.count" align-center
    :process-status="RetrievePassStore.state" finish-status="success">
    <el-step title="输入邮箱" />
    <el-step title="输入邮箱验证码" />
    <el-step title="完成" />
  </el-steps>
  <!-- <router-view></router-view> -->
  <div v-if="RetrievePassStore.count === 0">
    <el-input v-model="RetrievePassStore.email" style="width: 240px" placeholder="请输入您的email" /><br>
    <el-button @click="RetrievePassStore.next">下一步</el-button>
  </div>
  <div v-else-if="RetrievePassStore.count === 1">
    <el-input v-model="RetrievePassStore.emailVeriflcationCode" style="width: 240px" placeholder="请输入email验证码" /><br>
    <el-button @click="RetrievePassStore.next">下一步</el-button>
  </div>
  <div v-else-if="RetrievePassStore.count === 2">
    <el-alert title="完成！" center="true" :closable=false type="success" description="您已成功修改密码！" show-icon />
  </div>
  <el-link type="primary" href="/login">使用现有账号登录</el-link>
</template>

<script lang="ts" setup>
import { UseRetrievePassStore } from '@/hooks/RetrievePass'

const RetrievePassStore = UseRetrievePassStore()
</script>
