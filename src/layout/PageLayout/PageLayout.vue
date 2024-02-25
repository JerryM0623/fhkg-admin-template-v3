<script setup>
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import AsideMenuList from '@/layout/PageLayout/components/AsideMenuList/AsideMenuList.vue';
import HeaderBar from '@/layout/PageLayout/components/HeaderBar/HeaderBar.vue';

defineOptions({
  name: 'LayoutPage'
});
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container class="common-layout">
      <el-aside>
        <AsideMenuList />
      </el-aside>
      <el-container>
        <el-header>
          <HeaderBar />
        </el-header>
        <el-main>
          <RouterView>
            <template #default="{ Component, route }">
              <transition name="slide-fade">
                <div class="transition-wrapper" :key="route.name">
                  <component :is="Component"></component>
                </div>
              </transition>
            </template>
          </RouterView>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped lang="scss">
$side_width: 210px;
$header_height: 50px;
$transition_time: 0.4s;

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
      border-bottom: 1px solid #dddddd;
    }

    .el-main {
      width: calc(100vw - $side_width);
      height: calc(100vh - $header_height);
      padding: 20px;
      margin: 0;
      background-color: #ffffff;

      .transition-wrapper {
        width: 100%;
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all $transition_time ease-out;
}

.slide-fade-enter-active {
  transition-delay: $transition_time;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
