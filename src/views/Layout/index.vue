<template>
    <link rel="stylesheet" href="css/layout.css" />
    <el-container>
        <el-header>
            <div class="logo">
                <img style="width: 200px" src="/imgs/cover.png" alt="logo" />
            </div>
            <div class="icon">
                <el-avatar :icon="UserFilled" />
                <div class="tooltip">
                    <span>登录后你可以：</span>
                    <p>
                        <el-icon>
                            <Plus />
                        </el-icon>
                        创建Team
                    </p>
                    <p>
                        <el-icon>
                            <Tools />
                        </el-icon>
                        管理Team
                    </p>
                    <p>
                        <el-icon>
                            <Search />
                        </el-icon>
                        查看Team
                    </p>
                    <p>
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        加入Team
                    </p>
                    <el-button type="primary" @click="GoToLoginPage" >登录</el-button>
                </div>
            </div>
        </el-header>
        <el-main>
            <div class="layout-contont">
                <div class="warpper">
                    <div class="left">
                        <div class="title">秋水平台</div>
                        <span>开放式的人员管理平台</span>
                        <el-button type="primary" @click="GoToLoginPage">登录</el-button>
                    </div>

                    <div class="right">
                        <span></span>
                    </div>
                </div>
            </div>
        </el-main>

        <div class="home-page1">
            <span>加入秋水</span>
            <div class="item">
                <ul>
                    <li>
                        <img src="/imgs/sjfx.png" alt="" />
                        <h3>团队协同</h3>
                    </li>
                    <li>
                        <img src="/imgs/sjbb.png" alt="" />
                        <h3>数据管理</h3>
                    </li>
                    <li>
                        <img src="/imgs/ksrm.png" alt="" />
                        <h3>快速入门</h3>
                    </li>
                    <li>
                        <img src="/imgs/gtjb.png" alt="" />
                        <h3>共同进步</h3>
                    </li>
                </ul>
            </div>
        </div>

        <div class="under">
            <span>CopyRight @ 2024 TG团队</span>
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
import router from "@/router/index";

function GoToLoginPage() {
    router.push("/login");
}
</script>
