import { Editor } from "@tiptap/core"
import React from "react"
import { IconName } from "../icon"
// import FontColorPicker from "../components/button"

export interface BarItems {
  type: "button" | "component" | "divider"
  name: Partial<IconName>
  title?: string
  component?: React.FC<any>
  command?: (editor: Editor) => void
  render?: React.FC<any>
}

export const BarItems: BarItems[] = [
  {
    type: "button",
    name: "undo",
    title: "撤销",
    command: (editor) => editor.chain().undo().run(),
  },
  {
    type: "button",
    name: "redo",
    title: "重做",
    command: (editor) => editor.chain().redo().run(),
  },
  { type: "divider", name: "divider" },
  {
    type: "button",
    name: "bold",
    title: "加粗",
    command: (editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    type: "button",
    name: "italic",
    title: "斜体",
    command: (editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    type: "button",
    name: "underline",
    title: "下划线",
    command: (editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    type: "button",
    name: "strike",
    title: "删除线",
    command: (editor) => editor.chain().focus().toggleStrike().run(),
  },
  {
    type: "button",
    name: "code",
    title: "代码块",
    command: (editor) => editor.chain().focus().toggleCode().run(),
  },
  {
    type: "button",
    name: "superscript",
    title: "上标",
    command: (editor) => editor.chain().focus().toggleSuperscript().run(),
  },
  {
    type: "button",
    name: "subscript",
    title: "下标",
    command: (editor) => editor.chain().focus().toggleSubscript().run(),
  },
  { type: "divider", name: "divider" },
  // {
  //   type: "component",
  //   name: "fontColor",
  //   title: "文字颜色",
  //   component: FontColorPicker,
  // },
  {
    type: "button",
    name: "fontColor",
    title: "文字颜色",
    command: (editor) => editor.chain().focus().setColor("#f36").run(),
  },
  {
    type: "button",
    name: "backgroundColor",
    title: "文字背景颜色",
    command: (editor) => editor.chain().focus().setBackgroundColor("#f36").run(),
  },
  { type: "divider", name: "divider" },
  {
    type: "button",
    name: "fontColor",
    title: "字体大小",
    command: (editor) => editor.chain().setFontSize(28).focus().run(),
  },
  {
    type: "button",
    name: "fontColor",
    title: "字体",
    command: (editor) => editor.chain().focus().setFontFamily("宋体").run(),
  },
  { type: "divider", name: "divider" },
  {
    type: "button",
    name: "link",
    title: "链接",
    command: (editor) => editor.chain().focus().toggleLink({ href: "https://www.baidu.com" }).run(),
  },
  {
    type: "button",
    name: "image",
    title: "图片",
    command: (editor) =>
      editor.chain().focus().setImage({ src: "http://xie392.cn/images/cover_12.jpg" }).run(),
  },
  {
    type: "button",
    name: "blockquote",
    title: "引用",
    command: (editor) => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    type: "button",
    name: "bulletList",
    title: "无序列表",
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
  },
  {
    type: "button",
    name: "orderedList",
    title: "有序列表",
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    // TODO: 有 Bug 内容不在同一行
    type: "button",
    name: "taskList",
    title: "任务列表",
    command: (editor) => editor.chain().focus().toggleTaskList().run(),
  },
  {
    type: "button",
    name: "table",
    title: "表格",
    command: (editor) => editor.chain().focus().insertTable().run(),
  },
  { type: "divider", name: "divider" },
  {
    type: "button",
    name: "horizontalRule",
    title: "分割线",
    command: (editor) => editor.chain().focus().setHorizontalRule().run(),
  },
  {
    type: "button",
    name: "codeBlock",
    title: "代码块",
    command: (editor) => editor.chain().focus().toggleCodeBlock({ language: "javascript" }).run(),
  },
]
