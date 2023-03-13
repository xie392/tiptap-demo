<template>
  <Dropdown ref="dropdown" w="40px" :placement="placement">
    <template #btn>
      <ToolTip title="行高" :placement="placement">
        <div class="select-title">
          <div class="select-title-text">
            <svg-icon icon="tntin-svg_132" class="icon-btn" />
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
const dropdown = ref<HTMLElement | null>(null)
const value = ref<string>('默认')
const options = reactive(['默认','1', '1.15', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6'])

const change = (value: string) => {
    if(value === '默认') value = '2'
    props.editor.chain().focus().setLineHeight(value).run()
}

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
