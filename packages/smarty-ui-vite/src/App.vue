<script setup>
import TSXButton from "./button/src/TSXButton.tsx";
</script>

<template>
  App
  <div style="margin-bottom: 20px">
    <TSXButton color="blue">主要按钮</TSXButton>
    <TSXButton color="green">绿色按钮</TSXButton>
    <TSXButton color="gray">灰色按钮</TSXButton>
    <TSXButton color="yellow">黄色按钮</TSXButton>
    <TSXButton color="red">红色按钮</TSXButton>
  </div>
  <div style="margin-bottom: 20px">
    <TSXButton color="blue" plain>朴素按钮</TSXButton>
    <TSXButton color="green" plain>绿色按钮</TSXButton>
    <TSXButton color="gray" plain>灰色按钮</TSXButton>
    <TSXButton color="yellow" plain>黄色按钮</TSXButton>
    <TSXButton color="red" plain>红色按钮</TSXButton>
  </div>
  <div style="margin-bottom: 20px">
    <TSXButton size="small" plain>小按钮</TSXButton>
    <TSXButton size="medium" plain>中按钮</TSXButton>
    <TSXButton size="large" plain>大按钮</TSXButton>
  </div>
  <div style="margin-bottom: 20px">
    <TSXButton color="blue" round plain icon="search">搜索按钮</TSXButton>
    <TSXButton color="green" round plain icon="edit">编辑按钮</TSXButton>
    <TSXButton color="gray" round plain icon="check">成功按钮</TSXButton>
    <TSXButton color="yellow" round plain icon="message">提示按钮</TSXButton>
    <TSXButton color="red" round plain icon="delete">删除按钮</TSXButton>
  </div>
  <div style="margin-bottom: 20px">
    <TSXButton color="blue" round plain icon="search"></TSXButton>
    <TSXButton color="green" round plain icon="edit"></TSXButton>
    <TSXButton color="gray" round plain icon="check"></TSXButton>
    <TSXButton color="yellow" round plain icon="message"></TSXButton>
    <TSXButton color="red" round plain icon="delete"></TSXButton>
  </div>
</template>
