<template>
  <div class="app">
    <Layout />
    <div class="app-container">
      <Editor />
    </div>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/layout.vue'
import Editor from 'tiptap/index.vue'
</script>

<style lang="less" scoped>
.app {
  padding-top: 60px;
}

.app-container {
  width: 100%;
  height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
}
</style>
