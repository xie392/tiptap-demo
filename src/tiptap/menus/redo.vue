<template>
  <ToolTip title="撤销" :placement="placement">
    <button class="tool-btn" @click="change">
      <svg-icon icon="tntin-svg_113" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().redo().run()
}
</script>

<style scoped></style>
