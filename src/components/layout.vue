<template>
  <!-- <a-affix :offset-top="0" style="z-index: 9"> -->
  <div class="layout" :style="{ width: width }">tiptap</div>
  <!-- </a-affix> -->
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 60px;
  background: var(--bg-color, #fff);
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  padding: 0 30px;
}
</style>
