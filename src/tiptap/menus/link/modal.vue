<template>
  <a-modal
    v-model:visible="visible"
    title="链接"
    @ok="change"
    @cancel="cancel"
    ok-text="确认"
    cancel-text="取消"
    :width="400"
  >
    <a-form :model="form" autocomplete="off">
      <a-form-item label="文本:" name="text">
        <a-input v-model:value="form.text" />
      </a-form-item>
      <a-form-item label="链接:" name="link">
        <a-input v-model:value="form.link" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import { message } from 'ant-design-vue'

const props = defineProps<{ editor: Editor }>()
const emit = defineEmits(['update:visible'])
const visible = ref<boolean>(true)
const form = reactive({
  link: '',
  text: ''
})

const change = () => {
  if (!form.link) {
    return message.warning('请输入链接')
  }

  // 正则校验链接
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/

  if (!reg.test(form.link)) {
    return message.warning('请输入正确的链接')
  }

  // 设置链接,如果没有选中文本,则会自动选中当前光标所在的文本
  // @ts-ignore
  props.editor.chain().focus().addLink({ href: form.link, target: '_blank' }).run()

  props.editor
    .chain()
    .focus()
    .insertContent(form.text === '' ? form.link : form.text)
    .run()

  cancel()
}

const cancel = () => {
  emit('update:visible', false)
}

onUpdated(() => {
  const { from, to } = props.editor.state.selection
  const text = props.editor.state.doc.textBetween(from, to, ' ')

  // 获取当前选中的文本 herf
  const { href } = props.editor.getAttributes('link') || {}

  form.text = text
  form.link = href || ''
})
</script>

<style scoped></style>
