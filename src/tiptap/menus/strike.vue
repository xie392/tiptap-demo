<template>
  <ToolTip title="删除线" :placement="placement">
    <button class="tool-btn" @click="change" :class="{ 'tool-btn-active': editor.isActive('strike') }">
      <svg-icon icon="tntin-svg_124" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  props.editor.chain().focus().toggleStrike().run()
}
</script>

<style scoped></style>
