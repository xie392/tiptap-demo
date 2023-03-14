<template>
  <Dropdown ref="dropdown" w="24px" :placement="placement" class="dropdown-color">
    <template #btn>
      <ToolTip title="文字颜色" :placement="placement">
        <button class="tool-btn">
          <svg-icon icon="tntin-svg_7" class="icon-btn" />
          <span
            class="underline"
            :style="{
              background: editor.isActive('textStyle', { color: selectColor }) ? selectColor : '#000'
            }"
          ></span>
        </button>
      </ToolTip>
    </template>
    <template #content>
      <ColorPicker :editor="editor" type="color" :colse="colse" ref="picker" />
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

// @ts-ignore
const colse = () => dropdown.value && dropdown.value.close()

// @ts-ignore
const selectColor = computed(() => (picker.value && picker.value.selectColor) ?? '')
</script>

<style scoped>
.underline {
  width: 100%;
  height: 2px;
  display: block;
  margin: 0 auto;
}

.tool-btn {
  flex-direction: column;
}

.text {
  font-size: 14px;
  line-height: 30px;
}
</style>
