<template>
  <ToolTip title="画布" :placement="placement">
    <button class="tool-btn" @click="change" :class="{ 'tool-btn-active': editor.isActive('paper') }">
      <svg-icon icon="tntin-svg_49" class="icon-btn" />
    </button>
  </ToolTip>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'
import Document from '@tiptap/extension-document'

const props = defineProps<{ editor: Editor; placement: string }>()

const change = () => {
  console.log(props.editor)

  // Document.extend({
  //   content: 'paper'
  // })

  // 给editor添加一个属性

  // props.editor.extensions.Document.extend({
  //   content: 'paper'
  // })

  // props.editor.commands.setContent({
  //   content: 'paper'
  // })

  props.editor.chain().focus().setPaper({width:'100%',height:'300px'}).run()


}
</script>

<style scoped></style>
