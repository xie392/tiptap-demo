import { Editor } from "@tiptap/core"
import { IconName } from "../icon"
import {
  fontSizes,
  fonts,
  // lineHeights,
  defaultFontFamily,
  defaultFontSize,
  // defaultLineHeight,
} from "./select-data"
import { ButtonType, ButtonPopoverType, ButtonSelectType } from "./type"

export const defaultColor = "#262626"

export interface BarItems {
  type: keyof typeof ButtonType
  name: IconName
  title?: string
  command?: (editor: Editor) => void
  options?: string[]
  defaultValue?: string
}

export const BarItems: BarItems[] = [
  {
    type: "Button",
    name: "undo",
    title: "撤销",
    command: (editor) => editor.chain().undo().run(),
  },
  {
    type: "Button",
    name: "redo",
    title: "重做",
    command: (editor) => editor.chain().redo().run(),
  },
  { type: "Divider", name: "divider" },
  {
    type: "Button",
    name: "bold",
    title: "加粗",
    command: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    type: "Button",
    name: "italic",
    title: "斜体",
    command: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    type: "Button",
    name: "underline",
    title: "下划线",
    command: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    type: "Button",
    name: "strike",
    title: "删除线",
    command: (editor) => editor.chain().focus().toggleStrike().run(),
  },
  {
    type: "Button",
    name: "code",
    title: "代码块",
    command: (editor) => editor.chain().focus().toggleCode().run(),
  },
  {
    type: "Button",
    name: "superscript",
    title: "上标",
    command: (editor) => editor.chain().focus().toggleSuperscript().run(),
  },
  {
    type: "Button",
    name: "subscript",
    title: "下标",
    command: (editor) => editor.chain().focus().toggleSubscript().run(),
  },
  { type: "Divider", name: "divider" },
  {
    type: "ButtonPopover",
    name: ButtonPopoverType.FontColor,
    title: "文字颜色",
    command: (editor) => editor.chain().focus().setColor("#f36").run(),
  },
  {
    type: "ButtonPopover",
    name: ButtonPopoverType.BackgroundColor,
    title: "文字背景颜色",
    command: (editor) => editor.chain().focus().setBackgroundColor("#f36").run(),
  },
  { type: "Divider", name: "divider" },
  {
    type: "ButtonSelect",
    name: ButtonSelectType.FontSize,
    title: "字体大小",
    command: (editor) => editor.chain().setFontSize(28).focus().run(),
    options: fontSizes,
    defaultValue: defaultFontSize,
  },
  {
    type: "ButtonSelect",
    name: ButtonSelectType.FontFamily,
    title: "字体",
    command: (editor) => editor.chain().focus().setFontFamily("宋体").run(),
    options: fonts,
    defaultValue: defaultFontFamily,
  },
  { type: "Button", name: "divider" },
  {
    type: "ButtonPopup",
    name: "link",
    title: "链接",
    command: (editor) => editor.chain().focus().toggleLink({ href: "https://www.baidu.com" }).run(),
  },
  {
    type: "ButtonPopup",
    name: "image",
    title: "图片",
    command: (editor) =>
      editor.chain().focus().setImage({ src: "http://xie392.cn/images/cover_12.jpg" }).run(),
  },
  {
    type: "Button",
    name: "blockquote",
    title: "引用",
    command: (editor) => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    type: "Button",
    name: "bulletList",
    title: "无序列表",
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    type: "Button",
    name: "orderedList",
    title: "有序列表",
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    // TODO: 有 Bug 内容不在同一行
    type: "Button",
    name: "taskList",
    title: "任务列表",
    command: (editor) => editor.chain().focus().toggleTaskList().run(),
  },
  {
    type: "ButtonPopover",
    name: "table",
    title: "表格",
    command: (editor) => editor.chain().focus().insertTable().run(),
  },
  { type: "Divider", name: "divider" },
  {
    type: "Button",
    name: "horizontalRule",
    title: "分割线",
    command: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
  {
    type: "Button",
    name: "codeBlock",
    title: "代码块",
    command: (editor) => editor.chain().focus().toggleCodeBlock({ language: "javascript" }).run(),
  },
]

export { ButtonType, ButtonPopoverType, ButtonSelectType }
