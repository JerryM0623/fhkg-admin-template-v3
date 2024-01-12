<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'


defineOptions({
  name: 'HeaderBar'
})

const currentPathList = ref([])
const route = useRoute()
const router = useRouter()

watch(route, async (newVal) => {
  currentPathList.value = []
  const matched = newVal.matched
  const matchedArr = matched.filter(item => item.meta && item.meta.breadName)
  matchedArr.forEach(item => {
    currentPathList.value.push({ breadName: item.meta.breadName, path: item.path, enable: item.meta.enable })
  })
}, { deep: true, immediate: true })

function logout() {
  // 跳转至登录页面
  router.replace('/login')
}
</script>

<template>
  <el-row>
    <el-col class="breadcrumb" :span="20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in currentPathList"
          :key="item"
          :to="{ path: item.path }"
        >
          {{ item.breadName }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col class="user" :span="4">
      <el-dropdown>
        <span class="el-dropdown-link">
          熊熊熊子路
          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <!--<el-dropdown-item>修改密码</el-dropdown-item>-->
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-row {
  width: 100%;
  height: 100%;

  .breadcrumb {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .user {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    .el-dropdown {
      .el-dropdown-link {
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
}
</style>
