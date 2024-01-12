<script setup>
import { showInfoMessage, showErrorMessage, showSuccessMessage, showWarningMessage } from '@/utils/showMessage.js'
import { onMounted } from 'vue'

defineOptions({
  name: 'HomePage'
})

onMounted(() => {
  setTimeout(() => {showInfoMessage('test=info')}, 0);
  setTimeout(() => {showWarningMessage('test-warn')}, 3000);
  setTimeout(() => {showErrorMessage('test-error')}, 6000);
  setTimeout(() => {showSuccessMessage('test-success')}, 9000);
})
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <!--<el-row>-->
  <!--  <el-button :icon="Search" circle />-->
  <!--  <el-button type="primary" :icon="Edit" circle />-->
  <!--  <el-button type="success" :icon="Check" circle />-->
  <!--  <el-button type="info" :icon="Message" circle />-->
  <!--  <el-button type="warning" :icon="Star" circle />-->
  <!--  <el-button type="danger" :icon="Delete" circle />-->
  <!--</el-row>-->
</template>

<style scoped lang="scss">

</style>
