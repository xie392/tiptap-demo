<template>
  <ToolTip title="斜体" :placement="placement">
    <button class="tool-btn" @click="change" :class="{'tool-btn-active':editor.isActive('italic')}">
      <svg-icon icon="tntin-svg_88" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().toggleItalic().run()
}
</script>

<style scoped></style>
