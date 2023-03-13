<template>
  <Dropdown ref="dropdown" w="38px" :placement="placement">
    <template #btn>
      <ToolTip title="更多文本样式" :placement="placement">
      <div class="select-title" :class="{ 'select-title-active': options.some((v) => v.icon === value) }">
        <div class="select-title-text">
          <svg-icon :icon="value" class="icon-btn" />
        </div>
        <span class="select-title-icon"></span>
      </div>
      </ToolTip>
    </template>
    <template #content>
      <div class="select-content">
        <div
          class="select-content-item"
          v-for="(v, i) in options"
          :key="i"
          @click="change(v)"
          :class="value === v.icon ? 'select-content-item-active' : ''"
        >
          <div class="select-content-item-icon">
            <svg-icon :icon="v.icon"></svg-icon>
          </div>
          <div class="select-content-item-title">
            {{ v.name }}
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

interface Options {
  name: string
  value: string
  icon: string
  event: () => void
}

const props = defineProps<{ editor: Editor; placement?: string }>()
const dropdown = ref<HTMLElement | null>(null)
const value = ref<string>('tntin-svg_40')
const options = reactive<Array<Options>>([
  {
    name: '上标',
    value: 'superscript',
    icon: 'tntin-svg_18',
    event: () => props.editor.chain().focus().toggleSuperscript().run()
  },
  {
    name: '下标',
    value: 'subscript',
    icon: 'tntin-svg_19',
    event: () => props.editor.chain().focus().toggleSubscript().run()
  },
  {
    name: '行内代码',
    value: 'code',
    icon: 'tntin-svg_64',
    event: () => props.editor.chain().focus().toggleCode().run()
  }
])

const change = (value: Options) => {
  value.event()
  listener()
  // @ts-ignore
  dropdown.value && dropdown.value.close()
}

const current = (): string => {
  let mark = ''
  switch (true) {
    case props.editor.isActive('superscript'):
      mark = 'tntin-svg_18'
      break
    case props.editor.isActive('subscript'):
      mark = 'tntin-svg_19'
      break
    case props.editor.isActive('code'):
      mark = 'tntin-svg_64'
      break
    default:
      mark = 'tntin-svg_40'
      break
  }
  return mark
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
.select-title {
  padding: 0 5px;
  background: none;
}
.select-title .select-title-text {
  width: 20px;
  vertical-align: sub;
}

.select-title-active {
  background: #f5f5f5;
}
</style>
