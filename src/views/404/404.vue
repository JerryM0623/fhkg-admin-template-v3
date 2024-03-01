<script setup>
defineOptions({
  name: '404Page'
})

import {ref, onMounted} from "vue";

const seconds = ref(5);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    seconds.value--;
    if (seconds.value === 0) {
      clearInterval(timer);
      history.back();
    }
  }, 1000);
})
</script>

<template>
  <el-empty description="Oops! 页面走丢了！">
    <el-button type="primary">返回 ({{ seconds }}秒)</el-button>
  </el-empty>
</template>

<style scoped lang="scss">
.el-empty {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
