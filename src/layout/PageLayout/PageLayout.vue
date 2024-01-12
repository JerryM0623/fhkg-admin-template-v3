<script setup>
import { RouterView } from 'vue-router'
import AsideMenuList from '@/layout/PageLayout/components/AsideMenuList/AsideMenuList.vue'
import HeaderBar from '@/layout/PageLayout/components/HeaderBar/HeaderBar.vue'

defineOptions({
  name: 'LayoutPage'
})
</script>

<template>
  <el-container class="common-layout">
    <el-aside>
      <AsideMenuList />
    </el-aside>
    <el-container>
      <el-header>
        <HeaderBar />
      </el-header>
      <el-main>
        <el-card shadow="never">
          <RouterView />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
$side_width: 210px;
$header_height: 50px;

.common-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .el-aside {
    width: $side_width;
    height: 100vh;
  }

  .el-container {
    width: calc(100vw - $side_width);
    height: 100vh;

    .el-header {
      width: 100%;
      height: $header_height;
    }

    .el-main {
      width: calc(100vw - $side_width);
      height: calc(100vh - $header_height);
      padding: 20px;
      margin: 0;
      background-color: #eeeeee;
    }
  }
}
</style>
