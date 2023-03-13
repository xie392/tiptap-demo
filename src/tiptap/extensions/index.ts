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
import Link from '@tiptap/extension-link'
import SubsCript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { Placeholder } from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import Color from '@tiptap/extension-color'
import TaskList from '@tiptap/extension-task-list'
// import TaskItem from '@tiptap/extension-task-item'
import TextAlign from '@tiptap/extension-text-align'
import BubbleMenu from '@tiptap/extension-bubble-menu'

// 基础(自定义)
import { FontSize } from 'tiptap/extensions/font-size'
import { TextColor } from 'tiptap/extensions/text-color'
import { BackgroundColor } from 'tiptap/extensions/background-color'
import { TaskItem } from 'tiptap/extensions/task-item'
import { LineHeight } from 'tiptap/extensions/line-height'
// import { Indent } from '../extensions/indent'

const placeholders = ['使用 markdown 语法进行输入', '请输入内容', '一个占位提示']

const CustomDocument = Document.extend({
  content: 'heading block*'
})

export const extensions = [
  // Blockquote,
  BubbleMenu.configure({
    // 选择在哪些节点上显示菜单
    // types: ['heading', 'paragraph', 'image'],
  }),
  BackgroundColor,
  Color.configure({
    types: ['textStyle']
  }),
  TextColor,
  TextAlign.configure({
    types: ['heading', 'paragraph', 'image']
  }),
  FontSize,
  FontFamily.configure({
    types: ['textStyle']
  }),
  // HorizontalRule,
  // Indent,
  Link.configure({
    autolink: true
  }),
  LineHeight,
  // OrderedList,
  Placeholder.configure({
    // @ts-ignore
    placeholder: ({ node, editor }) => {
      if (node.type.name === 'heading') {
        return editor.isEditable ? '请输入标题' : '未命名文档'
      }

      return placeholders[~~(Math.random() * placeholders.length)]
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
  Underline
]
