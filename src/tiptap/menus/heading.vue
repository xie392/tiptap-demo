<template>
  <Dropdown ref="dropdown" w="83px" :placement="placement">
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
          @click="change('正文')"
          :class="value === '正文' ? 'select-content-item-active' : ''"
        >
          <div class="select-content-item-title">正文</div>
        </div>
        <div
          class="select-content-item"
          v-for="(v, i) in options"
          :key="i"
          @click="change(v.level)"
          :class="value === v.label ? 'select-content-item-active' : ''"
        >
          <div class="select-content-item-title" :class="'select-content-item-title-h' + v.level">
            {{ v.label }}
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
const value = ref<string>('正文')
const options = reactive([
  { label: '标题1', level: 1 },
  { label: '标题2', level: 2 },
  { label: '标题3', level: 3 },
  { label: '标题4', level: 4 },
  { label: '标题5', level: 5 },
  { label: '标题6', level: 6 }
])

const change = (value: string | number) => {
  if (value === '正文') {
    props.editor.chain().focus().setParagraph().run()
  } else {
    props.editor
      .chain()
      .focus()
      .setHeading({ level: Number(value) as 1 | 2 | 3 | 4 | 5 | 6 })
      .run()
  }
  listener()
  dropdown.value && dropdown.value.close()
}

// 选择当前的标题
const current = (): string => {
  const isH1 = props.editor.isActive('heading', { level: 1 })
  const isH2 = props.editor.isActive('heading', { level: 2 })
  const isH3 = props.editor.isActive('heading', { level: 3 })
  const isH4 = props.editor.isActive('heading', { level: 4 })
  const isH5 = props.editor.isActive('heading', { level: 5 })
  const isH6 = props.editor.isActive('heading', { level: 6 })
  if (isH1) return '标题1'
  if (isH2) return '标题2'
  if (isH3) return '标题3'
  if (isH4) return '标题4'
  if (isH5) return '标题5'
  if (isH6) return '标题6'
  return '正文'
}

const listener = () => {
  value.value = current()
}

props.editor.on('selectionUpdate', listener)

onUnmounted(() => {
  props.editor.off('selectionUpdate', listener)
})
</script>

<style lang="less" scoped>
.select-content .select-content-item {
  .select-content-item-title {
    font-weight: 700;
    opacity: 1;
  }

  .select-content-item-title-h1 {
    font-size: 22px;
  }

  .select-content-item-title-h2 {
    font-size: 20px;
  }

  .select-content-item-title-h3 {
    font-size: 18px;
  }

  .select-content-item-title-h4 {
    font-size: 16px;
  }

  .select-content-item-title-h5 {
    font-size: 14px;
  }

  .select-content-item-title-h6 {
    font-size: 12px;
  }
}
</style>
