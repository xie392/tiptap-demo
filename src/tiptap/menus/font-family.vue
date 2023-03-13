<template>
  <Dropdown ref="dropdown" w="100px" :placement="placement">
    <template #btn>
      <div class="select-title">
        <span class="select-title-text">{{ value }}</span>
        <span class="select-title-icon"></span>
      </div>
    </template>
    <template #content>
      <div class="select-content">
        <div
          class="select-content-item"
          v-for="(v, i) in options"
          :key="i"
          @click="change(v)"
          :class="value === v ? 'select-content-item-active' : ''"
        >
          <div class="select-content-item-title">
            {{ v }}
          </div>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import type { Editor } from '@tiptap/core'
import Dropdown from 'tiptap/menus/common/dropdown.vue'
import ToolTip from 'tiptap/menus/common/tooltip.vue'

const props = defineProps<{ editor: Editor; placement?: string }>()
const dropdown = ref<HTMLElement | null>(false)
const value = ref<string>('Chinese Quote')
const options = reactive([
  'Chinese Quote',
  'Inter',
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Georgia',
  'Trebuchet MS',
  'Impact',
  'Comic Sans MS',
  'Lucida Console',
  'Palatino Linotype',
  'Book Antiqua',
  'Garamond',
  '微软雅黑',
  '宋体',
  '黑体',
  '楷体',
  '仿宋',
  '幼圆'
])

const change = (value: string | number) => {
  props.editor.chain().focus().setFontFamily(value).run()
  listener()
  dropdown.value && dropdown.value.close()
}

const current = (): string => {
  const defaultValue = { fontFamily: 'Chinese Quote' }
  const attrs = { ...defaultValue, ...props.editor.getAttributes('textStyle') }

  Object.keys(attrs).forEach((key) => {
    // @ts-ignore
    if (attrs[key] === null || attrs[key] === undefined) {
      // @ts-ignore
      attrs[key] = defaultValue[key]
    }
  })

  return attrs.fontFamily || 'Chinese Quote'
}

const listener = () => {
  value.value = current()
}

props.editor.on('selectionUpdate', listener)

onUnmounted(() => {
  props.editor.off('selectionUpdate', listener)
})
</script>

<style scoped>
.select-title .select-title-text {
  width: 80px;
}
</style>
