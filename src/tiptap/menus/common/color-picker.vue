<template>
  <div class="color-picker">
    <div class="flex top-select" @click="handSelect('none')">
      <div class="icon-select"></div>
      <span>无颜色</span>
    </div>
    <div class="flex color-list">
      <div
        v-for="(v, i) in colors"
        :key="i"
        class="color-list-item"
        :style="{ background: v }"
        @click="handSelect(v)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'

const props = defineProps<{ editor: Editor; type?: string; colse?: Function; changeColor?: Function }>()
const colors = reactive<string[]>([
  '#000000',
  '#262626',
  '#595959',
  '#8C8C8C',
  '#BFBFBF',
  '#D9D9D9',
  '#E9E9E9',
  '#F5F5F5',
  '#FAFAFA',
  '#FFFFFF',
  '#F5222D',
  '#FA541C',
  '#FA8C16',
  '#FADB14',
  '#52C41A',
  '#13C2C2',
  '#1890FF',
  '#2F54EB',
  '#722ED1',
  '#EB2F96',
  '#FFE8E6',
  '#FFECE0',
  '#FFEFD1',
  '#FCFCCA',
  '#E4F7D2',
  '#D3F5F0',
  '#D4EEFC',
  '#DEE8FC',
  '#EFE1FA',
  '#FAE1EB',
  '#FFA39E',
  '#FFBB96',
  '#FFD591',
  '#FFFB8F',
  '#B7EB8F',
  '#87E8DE',
  '#91D5FF',
  '#ADC6FF',
  '#D3ADF7',
  '#FFADD2',
  '#FF4D4F',
  '#FF7A45',
  '#FFA940',
  '#FFEC3D',
  '#73D13D',
  '#36CFC9',
  '#40A9FF',
  '#597EF7',
  '#9254DE',
  '#F759AB',
  '#CF1322',
  '#D4380D',
  '#D46B08',
  '#D4B106',
  '#389E0D',
  '#08979C',
  '#096DD9',
  '#1D39C4',
  '#531DAB',
  '#C41D7F',
  '#820014',
  '#871400',
  '#873800',
  '#614700',
  '#135200',
  '#00474F',
  '#003A8C',
  '#061178',
  '#22075E',
  '#780650'
])
const selectColor = ref<string>('')

const handSelect = (color: string) => {
  if (props.type === 'bg-color')
    color === 'none'
      ? props.editor.chain().focus().unsetBackgroundColor().run()
      : props.editor.chain().focus().setBackgroundColor(color).run()
  else
    color === 'none'
      ? props.editor.chain().focus().unsetColor().run()
      : props.editor.chain().focus().setColor(color).run()
  selectColor.value = color

  if (props.colse) props.colse()
}

const setColor = () => {
  props.changeColor && props.changeColor(selectColor.value)
}

const listener = () => {
  // 获取选中的颜色
  const colorList = props.editor.getAttributes('textStyle')

  if (colorList && colorList.color) {
    selectColor.value = colorList.color
  } else if (colorList && colorList.backgroundColor) {
    selectColor.value = colorList.backgroundColor
  } else {
    selectColor.value = ''
  }
}

props.editor.on('selectionUpdate', listener)

onUnmounted(() => {
  props.editor.off('selectionUpdate', listener)
})

defineExpose({
  selectColor
})
</script>

<style lang="less" scoped>
.color-picker {
  width: 260px;
  padding: 10px 8px;
  background-color: var(--bg-color, #fff);
  font-size: 14px;

  .top-select {
    justify-content: flex-start;
    cursor: pointer;
    padding: 5px 0;
    user-select: none;

    .icon-select {
      width: 15px;
      height: 15px;
      margin-right: 8px;
      border: 1px solid var(--border-color, #ccc);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 12px;
        transform: rotate(-45deg);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background-color: #f36;
      }
    }

    &:hover {
      background: #f5f5f5;
    }
  }

  .color-list {
    margin-top: 10px;
    flex-wrap: wrap;

    .color-list-item {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      margin-bottom: 4px;
      border: 1px solid var(--border-color, #ccc);
      cursor: pointer;
      user-select: none;
      border-radius: var(--border-radius, 4px);

      &:hover {
        border-color: #f36;
      }
    }
  }
}
</style>
