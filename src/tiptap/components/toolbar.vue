<template>
  <div class="toolbar">
    <div class="toolbaer-content">
      <!-- <Redo :editor="editor" :placement="placement" />
      <Undo :editor="editor" :placement="placement" />
      <Clear :editor="editor" :placement="placement" />
      <Divider />
      <Heading :editor="editor" :placement="placement" />
      <FontFamily :editor="editor" :placement="placement" />
      <FontSize :editor="editor" :placement="placement" />
      <Bold :editor="editor" :placement="placement" />
      <Italic :editor="editor" :placement="placement" />
      <Underline :editor="editor" :placement="placement" />
      <Strike :editor="editor" :placement="placement" />
      <Code :editor="editor" :placement="placement" />
      <SuperScript :editor="editor" :placement="placement" />
      <SubScript :editor="editor" :placement="placement" />
      <TextColor :editor="editor" :placement="placement" />
      <BackgroundColor :editor="editor" :placement="placement" />
      <Divider />
      <Align :editor="editor" :placement="placement" /> -->
      <div class="toolbaer-content-item" v-for="(v, i) in items" :key="i">
        <component :is="v" :editor="editor" :placement="placement" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/core'
import Divider from 'tiptap/menus/common/divider.vue'
import Redo from 'tiptap/menus/redo.vue'
import Undo from 'tiptap/menus/undo.vue'
import Clear from 'tiptap/menus/clear.vue'
import Heading from 'tiptap/menus/heading.vue'
import FontFamily from 'tiptap/menus/font-family.vue'
import FontSize from 'tiptap/menus/font-size.vue'
import Bold from 'tiptap/menus/bold.vue'
import Italic from 'tiptap/menus/italic.vue'
import Underline from 'tiptap/menus/underline.vue'
import Strike from 'tiptap/menus/strike.vue'
// import Code from 'tiptap/menus/code.vue'
// import SuperScript from 'tiptap/menus/superscript.vue'
// import SubScript from 'tiptap/menus/subscript.vue'
import TextColor from 'tiptap/menus/text-color.vue'
import BackgroundColor from 'tiptap/menus/background-color.vue'
import Align from 'tiptap/menus/align.vue'
import TextStyle from 'tiptap/menus/text-style.vue'
import BulletList from 'tiptap/menus/bullet-list.vue'
import OrderList from 'tiptap/menus/order-list.vue'
import TaskList from 'tiptap/menus/task-list.vue'
import lineHeight from 'tiptap/menus/line-height.vue'
import Blockquote from 'tiptap/menus/blockquote.vue'
import Link from 'tiptap/menus/link.vue'
import More from 'tiptap/menus/more.vue'

import Paper from 'tiptap/menus/test/paper.vue'

const props = defineProps<{ editor: Editor }>()
const placement = ref<string>('bottom')

const items = reactive([
  markRaw(More),
  markRaw(Divider),
  markRaw(Redo),
  markRaw(Undo),
  markRaw(Clear),
  markRaw(Divider),
  markRaw(Heading),
  markRaw(FontFamily),
  markRaw(FontSize),
  markRaw(Bold),
  markRaw(Italic),
  markRaw(Underline),
  markRaw(Strike),
  markRaw(TextStyle),
  markRaw(Divider),
  markRaw(TextColor),
  markRaw(BackgroundColor),
  markRaw(Divider),
  markRaw(Align),
  markRaw(BulletList),
  markRaw(OrderList),
  markRaw(TaskList),
  // 缩进
  // markRaw(Indent),
  // markRaw(Outdent),
  // markRaw(Divider),
  markRaw(lineHeight),
  markRaw(Divider),
  markRaw(Blockquote),
  markRaw(Link),

  // test
  markRaw(Paper),
])

const toMarkRaw = (component: Component) => {
  return markRaw(component)
}
</script>

<style lang="less">
@import 'tiptap/styles/toolbar.less';
</style>
