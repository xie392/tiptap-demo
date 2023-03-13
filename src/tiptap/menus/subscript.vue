<template>
  <ToolTip title="下标" :placement="placement">
    <button class="tool-btn" @click="change" :class="{ 'tool-btn-active': editor.isActive('subscript') }">
      <svg-icon icon="tntin-svg_19" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().toggleSubscript().run()
}
</script>

<style scoped>
/* .tool-btn {
  box-sizing: border-box;
  padding-top: 9px !important;
} */
</style>
