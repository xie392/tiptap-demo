<template>
  <ToolTip title="有序列表" :placement="placement">
    <button class="tool-btn" @click="change" :class="{ 'tool-btn-active': editor.isActive('orderedList') }">
      <svg-icon icon="tntin-svg_34" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().toggleOrderedList().run()

  // 判定是否有序列表
  console.log(props.editor.isActive('orderedList'))
}
</script>

<style scoped></style>
