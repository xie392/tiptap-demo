<template>
  <ToolTip title="重做" :placement="placement">
    <button class="tool-btn" @click="change">
      <svg-icon icon="tntin-svg_125" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().undo().run()
}
</script>

<style scoped></style>
