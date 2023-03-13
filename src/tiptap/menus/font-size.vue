<template>
  <Dropdown ref="dropdown" w="80px" :placement="placement">
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
const value = ref<string>('16px')
const options = reactive([
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '26px',
  '28px',
  '30px',
  '32px',
  '34px',
  '36px',
  '38px',
  '40px',
  '42px',
  '44px',
  '46px',
  '48px'
])

const change = (value: string | number) => {
  props.editor.chain().focus().setFontSize(value).run()
  listener()
  dropdown.value && dropdown.value.close()
}

const current = (): string => {
  const defaultValue = { fontSize: '16px' }
  const attrs = { ...defaultValue, ...props.editor.getAttributes('textStyle') }

  Object.keys(attrs).forEach((key) => {
    // @ts-ignore
    if (attrs[key] === null || attrs[key] === undefined) {
      // @ts-ignore
      attrs[key] = defaultValue[key]
    }
  })

  return attrs.fontSize || '16px'
}

const listener = () => {
  value.value = current()
}

props.editor.on('selectionUpdate', listener)

onUnmounted(() => {
  props.editor.off('selectionUpdate', listener)
})
</script>

<style scoped></style>
