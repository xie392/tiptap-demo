<template>
  <Dropdown ref="dropdown" w="24px" :placement="placement" class="dropdown-color dropdown-bg-color">
    <template #btn>
      <ToolTip title="背景颜色" :placement="placement">
        <button class="tool-btn">
          <svg-icon icon="tntin-svg_101-copy" class="icon-btn" />
          <span
            class="underline"
            :style="{
              background: editor.isActive('textStyle', { backgroundColor: picker?.selectColor })
                ? picker?.selectColor
                : '#000'
            }"
          ></span>
        </button>
      </ToolTip>
    </template>
    <template #content>
      <ColorPicker :editor="editor" type="bg-color" :colse="dropdown?.close" ref="picker" />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import ColorPicker from 'tiptap/menus/common/color-picker.vue'
import Dropdown from 'tiptap/menus/common/dropdown.vue'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement?: string }>()
const dropdown = ref<HTMLElement | null>(null)
const picker = ref<HTMLElement | null>(null)
const color = ref<string>('')
</script>

<style scoped>
.underline {
  width: 100%;
  height: 2px;
  display: block;
  margin: -2px auto;
}

.tool-btn {
  flex-direction: column;
}
</style>
