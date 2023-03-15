// 基础(自带)
import Text from '@tiptap/extension-text'
import Blockquote from '@tiptap/extension-blockquote'
import { Bold } from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'
import HardBreak from '@tiptap/extension-hard-break'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Italic from '@tiptap/extension-italic'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import SubsCript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { Placeholder } from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import Color from '@tiptap/extension-color'
import TaskList from '@tiptap/extension-task-list'
// import TaskItem from '@tiptap/extension-task-item'
import TextAlign from '@tiptap/extension-text-align'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import Link from '@tiptap/extension-link'
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

// 基础(自定义)
import { FontSize } from 'tiptap/extensions/font-size'
// import { TextColor } from 'tiptap/extensions/text-color'
import { BackgroundColor } from 'tiptap/extensions/background-color'
import { TaskItem } from 'tiptap/extensions/task-item'
import { LineHeight } from 'tiptap/extensions/line-height'
import { PaperDrawing } from 'tiptap/extensions/paper'
import { BuiltLink } from 'tiptap/extensions/link'
import { ColorHighlighter } from 'tiptap/extensions/color-highlighter/color-highlighter'
import { SmilieReplacer } from 'tiptap/extensions/smilie-replacer'
// import { CodeBlockLight } from 'tiptap/extensions/code-block-light'
// import { LowlightPlugin, CodeBlock } from 'tiptap/extensions/code-block-light'
// import { Indent } from '../extensions/indent'

import { VueNodeViewRenderer } from '@tiptap/vue-3'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import CodeBlock from 'tiptap/components/code-block.vue'
import { lowlight } from 'lowlight'

const placeholders = ['使用 markdown 语法进行输入', '请输入内容', '一个占位提示']

const CustomDocument = Document.extend({
  content: 'heading block*'
})

export const extensions = [
  // BubbleMenu.configure({
  // 选择在哪些节点上显示菜单
  // types: ['heading', 'paragraph', 'image'],
  // }),
  BubbleMenu.configure({
    // @ts-ignore
    // shouldShow: true
    shouldShow: ({ editor, view, state, oldState, from, to }) => {
      console.log('shouldShow', editor, view, state, oldState, from, to)
      return editor.isActive('image') || editor.isActive('Link')
    }
  }),
  BackgroundColor,
  Color.configure({
    types: ['textStyle']
  }),
  // TextColor,
  TextAlign.configure({
    types: ['heading', 'paragraph', 'image']
  }),
  FontSize,
  FontFamily.configure({
    types: ['textStyle']
  }),
  // HorizontalRule,
  // Indent,
  // Link.configure({
  //   autolink: true
  // }),
  // Link,
  LineHeight,
  Placeholder.configure({
    // @ts-ignore
    placeholder: ({ node, editor }) => {
      console.log('placeholder', node,editor)

      // @ts-ignore
      // 自定义节点不会触发 placeholder
      
      if (node.type.name === 'heading') {
        return editor.isEditable ? '请输入标题' : '未命名文档'
      }

      // 类名为 block-wrapper 的节点
      if (node.type.name === 'paragraph') {
        // return editor.isEditable ? '请输入内容' : '未命名文档'
        return editor.isEditable ? placeholders[~~(Math.random() * placeholders.length)] : ''
      }

      return ''

      
    },
    showOnlyCurrent: true,
    showOnlyWhenEditable: true
  }),
  StarterKit,
  Superscript,
  SubsCript,
  TextStyle,
  TaskList.configure({
    HTMLAttributes: {
      class: 'task-list'
    }
  }),
  TaskItem,
  Underline,
  PaperDrawing,
  // Document.extend({
  //   content: 'paper',
  // }),
  BuiltLink,
  // CustomDocument,
  ColorHighlighter,
  SmilieReplacer,
  // CodeBlock,
  // LowlightPlugin
  CodeBlockLowlight.extend({
    addNodeView() {
      return VueNodeViewRenderer(CodeBlock)
    }
  }).configure({
    lowlight,
    HTMLAttributes: {
      class: 'pre'
    }
  }),
  Code.configure({
    HTMLAttributes: {
      class: 'inline-code'
    }
  }),
]
