<script setup>
defineOptions({
  name: 'AsideMenuList'
})
import { ref, watch } from 'vue'
import { Document, Setting } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const isCollapse = ref(false)
const route = useRoute();
const defaultActive = ref(route.fullPath)

watch(() => route, () => {
  defaultActive.value = route.fullPath
}, {deep: true, immediate: true})

</script>

<template>
  <el-menu
    active-text-color="#409edb"
    background-color="#304156"
    text-color="#fff"
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/home">
      <el-icon>
        <document />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/meeting">
      <el-icon>
        <document />
      </el-icon>
      <template #title>会议列表</template>
    </el-menu-item>
    <el-menu-item index="/enrolled">
      <el-icon>
        <document />
      </el-icon>
      <template #title>报名列表</template>
    </el-menu-item>
    <el-menu-item index="/write-off">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>核销记录</template>
    </el-menu-item>
    <el-menu-item index="/accounts">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>账号管理</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
</style>
