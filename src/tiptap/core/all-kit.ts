// import type { Extension } from "@tiptap/core"

// 基本扩展
import StarterKit from "@tiptap/starter-kit"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"

// 其他扩展
import Blockquote from "@tiptap/extension-blockquote"
import Bold from "@tiptap/extension-bold"
import BubbleMenu from "@tiptap/extension-bubble-menu"
import BulletList from "@tiptap/extension-bullet-list"
import ListItem from "@tiptap/extension-list-item"
import CharacterCount from "@tiptap/extension-character-count"
import Code from "@tiptap/extension-code"
import CodeBlock from "@tiptap/extension-code-block"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { lowlight } from "lowlight/lib/core"
import Color from "@tiptap/extension-color"
import Dropcursor from "@tiptap/extension-dropcursor"
import FloatingMenu from "@tiptap/extension-floating-menu"
import Focus from "@tiptap/extension-focus"
import FontFamily from "@tiptap/extension-font-family"
import Gapcursor from "@tiptap/extension-gapcursor"
import HardBreak from "@tiptap/extension-hard-break"
import Heading from "@tiptap/extension-heading"
import Highlight from "@tiptap/extension-highlight"
// import History from "@tiptap/extension-history"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Image from "@tiptap/extension-image"
import Italic from "@tiptap/extension-italic"
import Link from "@tiptap/extension-link"
import Mention from "@tiptap/extension-mention"
import OrderedList from "@tiptap/extension-ordered-list"
import Placeholder from "@tiptap/extension-placeholder"
import Strike from "@tiptap/extension-strike"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
// 表格
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import Youtube from "@tiptap/extension-youtube"
// 协作
import Collaboration from "@tiptap/extension-collaboration"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
// @ts-ignore
import { WebrtcProvider } from "y-webrtc"
import * as Y from "yjs"

const ydoc = new Y.Doc()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const provider = new WebrtcProvider("tiptap-collaboration-extension", ydoc)

const placeholders = ["使用 markdown 语法进行输入", "请输入内容", "一个占位提示"]

/**
 * 编辑器扩展
 * @type {Array<Extension>}
 * @see Extension
 * @see https://www.tiptap.dev/api/extensions
 */
export const AllExtensions = [
  // 基本扩展
  StarterKit,
  Document,
  Paragraph,
  Text,

  // 其他扩展
  Blockquote.configure({
    HTMLAttributes: {
      class: "blockquote",
    },
  }),
  Bold,
  BubbleMenu.configure({
    element: document.querySelector(".bubble-menu") as HTMLElement,
  }),
  BulletList,
  ListItem,
  CharacterCount.configure({
    limit: 10000,
  }),
  Code,
  CodeBlock.configure({
    languageClassPrefix: "language-",
  }),
  CodeBlockLowlight.configure({
    lowlight,
    defaultLanguage: "plaintext",
    languageClassPrefix: "language-",
    HTMLAttributes: {
      class: "code-block-light",
    },
  }),
  Color.configure({
    types: ["textStyle"],
  }),
  Dropcursor.configure({
    color: "#ff0000",
    width: 2,
    class: "dropcursor",
  }),
  FloatingMenu.configure({
    element: document.querySelector(".float-menu") as HTMLElement,
  }),
  Focus.configure({
    // 'all'、'shallowest'、'deepest'
    mode: "deepest",
    className: "focus",
  }),
  FontFamily.configure({
    types: ["textStyle"],
  }),
  Gapcursor,
  HardBreak.configure({
    HTMLAttributes: {
      class: "hard-break",
    },
  }),
  Heading,
  Highlight.configure({
    // 多种颜色支持
    multicolor: true,
  }),
  // History,
  HorizontalRule,
  Image.configure({
    allowBase64: true,
  }),
  Italic,
  /**
   * 链接
   * @see: https://tiptap.dev/api/marks/link
   */
  Link,
  /**
   * 提及
   * @see: https://tiptap.dev/api/nodes/mention
   */
  Mention.configure({
    renderLabel({ options, node }) {
      return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`
    },
  }),
  OrderedList.configure({
    itemTypeName: "listItem",
  }),
  Strike,
  Subscript,
  Superscript,
  /**
   * 表格
   * @see: https://tiptap.dev/api/nodes/table
   */
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  TextStyle,
  Typography,
  Underline,
  Placeholder.configure({
    // emptyEditorClass: "is-editor-empty",
    placeholder: ({ node }) => {
      if (node.type.name === "heading") {
        return "请输入标题"
      }

      return placeholders[Math.floor(Math.random() * placeholders.length)]
    },
  }),
  // 协作
  Collaboration.configure({
    document: ydoc,
  }),
  CollaborationCursor.configure({
    provider,
    user: {
      name: "xie392",
      color: "#f783ac",
    },
  }),
  Youtube,
]
