<template>
  <ToolTip title="清除格式" :placement="placement">
    <button class="tool-btn" @click="change">
      <svg-icon icon="tntin-svg_42" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().clearNodes().run()
}
</script>

<style scoped></style>
