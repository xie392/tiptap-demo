<template>
  <Dropdown ref="dropdown" w="38px" :placement="placement">
    <template #btn>
      <ToolTip title="对齐方式" :placement="placement">
        <div class="select-title" :class="{ 'select-title-active': isActive }">
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
const value = ref<string>('tntin-svg_134')
const options = reactive<Array<Options>>([
  {
    name: '左对齐',
    value: 'left',
    icon: 'tntin-svg_134',
    event: () => props.editor.chain().focus().setTextAlign('left').run()
  },
  {
    name: '居中对齐',
    value: 'center',
    icon: 'tntin-svg_132',
    event: () => props.editor.chain().focus().setTextAlign('center').run()
  },
  {
    name: '右对齐',
    value: 'right',
    icon: 'tntin-svg_136',
    event: () => props.editor.chain().focus().setTextAlign('right').run()
  },
  {
    name: '两端对齐',
    value: 'justify',
    icon: 'tntin-svg_133',
    event: () => props.editor.chain().focus().setTextAlign('justify').run()
  }
])

const isActive = computed(() => {
  return options.some((v: Options) => v.icon === value.value)
})

const change = (value: Options) => {
  value.event()
  listener()
  // @ts-ignore
  dropdown.value && dropdown.value.close()
}

const current = (): string => {
  let mark = ''
  switch (true) {
    case props.editor.isActive('textAlign', { textAlign: 'left' }):
      mark = 'tntin-svg_134'
      break
    case props.editor.isActive('textAlign', { textAlign: 'center' }):
      mark = 'tntin-svg_132'
      break
    case props.editor.isActive('textAlign', { textAlign: 'right' }):
      mark = 'tntin-svg_136'
      break
    case props.editor.isActive('textAlign', { textAlign: 'justify' }):
      mark = 'tntin-svg_133'
      break
    default:
      mark = 'tntin-svg_134'
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
