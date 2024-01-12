<script setup>
import { ref, reactive } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import { showSuccessMessage } from '@/utils/showMessage.js'
import { showSuccessNotification } from '@/utils/showNotification.js'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'LoginPage'
})

const loginForm = reactive({
  username: '',
  password: ''
})

const loginFormRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名的长度在3-5个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 16, message: '密码的长度在8-16个字符之间', trigger: 'blur' }
  ]
})

const loginBtnLoading = ref(false)
const loginFormRef = ref(null)
const router = useRouter()

function onSubmit() {
  if (!loginFormRef.value) return
  loginFormRef.value.validate((valid) => {
    if (valid) {
      loginBtnLoading.value = true
      setTimeout(() => {
        loginBtnLoading.value = false
        showSuccessMessage('登录成功')
        router.replace('/')
        showSuccessNotification('登录成功', `欢迎回来，${loginForm.username}。`)
      }, 2000)
    } else {
      console.error('error submit!')
    }
  })
}
</script>

<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login-form">
      <el-row class="title-row">
        <el-col :span="24" class="title">会议入场证</el-col>
      </el-row>
      <el-form-item label="" prop="username">
        <el-input size="large" v-model="loginForm.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon" size="16">
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input size="large" v-model="loginForm.password" show-password placeholder="请输入密码">
          <template #prefix>
            <el-icon class="el-input__icon" size="16">
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loginBtnLoading" class="login-btn" size="large" type="primary" @click="onSubmit">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #eee;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;

  .login-form {
    width: 420px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 160px;

    .title-row {
      .title {
        font-size: 26px;
        color: #eee;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: 700;
      }
    }

    .el-form-item {
      width: 100%;
      height: 50px;
      margin-bottom: 22px;

      .el-input {
        width: 100%;
        height: 100%;

        :deep(.el-input__wrapper) {
          box-shadow: none;
          border-radius: 5px;
          background-color: #283443;
          border: 1px solid hsla(0, 0%, 100%, .1);

          .el-input__inner {
            color: white;
          }
        }
      }

      .login-btn {
        width: 100%;
        height: 40px;
      }
    }
  }
}
</style>
