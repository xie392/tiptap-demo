<template>
  <ToolTip title="链接" :placement="placement">
    <button
      class="tool-btn"
      @click="visible = !visible"
      :class="{ 'tool-btn-active': editor.isActive('bold') }"
    >
      <svg-icon icon="tntin-svg_93" class="icon-btn" />
    </button>
  </ToolTip>
  <Modal :editor="editor" v-model:visible="visible"/>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ToolTip from 'tiptap/menus/common/tooltip.vue'
import Modal from 'tiptap/menus/link/modal.vue'

const props = defineProps<{ editor: Editor; placement: string }>()
const visible = ref<boolean>(false)
</script>

<style scoped></style>
