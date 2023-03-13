<template>
  <div>
    <!-- <div v-if="editor" class="toolbar">
      <a-button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        加粗
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        斜体
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        删除线
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        代码
      </a-button>
      <a-button @click="editor.chain().focus().unsetAllMarks().run()">清除格式</a-button>
      <a-button @click="editor.chain().focus().clearNodes().run()">清除内容</a-button>
      <a-button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        段落
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        标题一
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        标题二
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        标题三
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        标题四
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        标题五
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        标题六
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        无序列表
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        有序列表
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        代码块
      </a-button>
      <a-button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        引用
      </a-button>
      <a-button @click="editor.chain().focus().setHorizontalRule().run()">分割线</a-button>
      <a-button @click="editor.chain().focus().setHardBreak().run()">换行</a-button>
      <a-button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
        插入表格
      </a-button>
      <a-button @click="editor.chain().focus().addColumnBefore().run()">在左侧插入列</a-button>
      <a-button @click="editor.chain().focus().addColumnAfter().run()">在右侧插入列</a-button>
      <a-button @click="editor.chain().focus().deleteColumn().run()">删除列</a-button>
      <a-button @click="editor.chain().focus().addRowBefore().run()">在上方插入行</a-button>
      <a-button @click="editor.chain().focus().addRowAfter().run()">在下方插入行</a-button>
      <a-button @click="editor.chain().focus().deleteRow().run()">删除行</a-button>
      <a-button @click="editor.chain().focus().deleteTable().run()">删除表格</a-button>
      <a-button @click="editor.chain().focus().mergeCells().run()">合并单元格</a-button>
      <a-button @click="editor.chain().focus().splitCell().run()">拆分单元格</a-button>
      <a-button @click="editor.chain().focus().toggleHeaderColumn().run()">切换列标题</a-button>
      <a-button @click="editor.chain().focus().toggleHeaderRow().run()">切换行标题</a-button>
      <a-button @click="editor.chain().focus().toggleHeaderCell().run()">切换单元格标题</a-button>
      <a-button @click="editor.chain().focus().mergeOrSplit().run()">合并/拆分单元格</a-button>
      <a-button @click="editor.chain().focus().setCellAttribute('colspan', 2).run()">设置单元格属性</a-button>
      <a-button @click="editor.chain().focus().fixTables().run()">修复表格</a-button>
      <a-button @click="editor.chain().focus().goToNextCell().run()">goToNextCell</a-button>
      <a-button @click="editor.chain().focus().goToPreviousCell().run()">goToPreviousCell</a-button>
      <a-button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </a-button>
      <a-button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </a-button>
    </div> -->
    <ToolBar :editor="editor" v-if="editor" />
    <editor-content :editor="editor" class="editor" />
  </div>
</template>

<script setup lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { extensions } from 'tiptap/extensions/index'
import type { Editor as EditorType } from '@tiptap/core'
import ToolBar from 'tiptap/components/toolbar.vue'

const editor = ref<Editor>()

const initEditor = () => {
  editor.value = new Editor({
    extensions,
    editorProps: {
      attributes: {
        class: 'tiptap-editor'
      }
    }
  })
}

onMounted(() => {
  initEditor()
})

onUnmounted(() => {
  editor.value && editor.value.destroy()
})
</script>

<style scoped lang="less">
@import 'tiptap/styles/common.less';
.editor {
  padding: 10px 20px;
  min-height: calc(100vh - 140px);
  background: #fff;
}

// ::v-deep(.ProseMirror) {
//   box-sizing: border-box;
//   line-height: 2;
//   font-size: 16px;

//   strong {
//     font-weight: bold;
//   }

//   em {
//     font-style: italic;
//   }

//   P {
//     line-height: 2·;
//   }

//   &:focus-visible {
//     outline: none;
//   }

//   .is-editor-empty:first-child::before {
//     color: #adb5bd;
//     content: attr(data-placeholder);
//     float: left;
//     height: 0;
//     pointer-events: none;
//   }

//   .is-empty::before {
//     color: #adb5bd;
//     content: attr(data-placeholder);
//     float: left;
//     height: 0;
//     pointer-events: none;
//   }

//   ul {
//     list-style: disc;
//     // padding: 0 1rem;
//   }

//   ol {
//     list-style: decimal;
//     // padding: 0 1rem;
//   }

//   .task-list {
//     list-style: none;
//     padding: 0;

//     li {
//       display: flex;
//       align-items: center;
//       line-height: 1.5;

//       label {
//         padding-top: 0.15rem;
//       }

//       input {
//         margin-right: 0.5rem;
//       }
//     }
//   }

//   h1 {
//     font-size: 2rem;
//   }

//   h2 {
//     font-size: 1.75rem;
//   }

//   h3 {
//     font-size: 1.5rem;
//   }

//   h4 {
//     font-size: 1.25rem;
//   }

//   h5 {
//     font-size: 1rem;
//   }

//   h6 {
//     font-size: 0.875rem;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     line-height: 1.5;
//     margin: 15px 0 15px;
//     font-weight: bold;
//   }

//   code {
//     background-color: rgba(#616161, 0.1);
//     color: #616161;
//   }

//   pre {
//     background: #0d0d0d;
//     color: #fff;
//     font-family: 'JetBrainsMono', monospace;
//     padding: 0.75rem 1rem;
//     border-radius: 0.5rem;

//     code {
//       color: inherit;
//       padding: 0;
//       background: none;
//       font-size: 0.8rem;
//     }
//   }

//   img {
//     max-width: 100%;
//     height: auto;
//   }

//   blockquote {
//     padding-left: 1rem;
//     border-left: 2px solid rgba(#0d0d0d, 0.1);
//   }

//   hr {
//     border: none;
//     border-top: 2px solid rgba(#0d0d0d, 0.1);
//     margin: 2rem 0;
//   }

//   table {
//     border-collapse: collapse;
//     table-layout: fixed;
//     width: 100%;
//     margin: 0;
//     overflow: hidden;

//     td,
//     th {
//       min-width: 1em;
//       border: 2px solid #ced4da;
//       padding: 3px 5px;
//       vertical-align: top;
//       box-sizing: border-box;
//       position: relative;

//       > * {
//         margin-bottom: 0;
//       }
//     }

//     th {
//       font-weight: bold;
//       text-align: left;
//       background-color: #f1f3f5;
//     }

//     .selectedCell:after {
//       z-index: 2;
//       position: absolute;
//       content: '';
//       left: 0;
//       right: 0;
//       top: 0;
//       bottom: 0;
//       background: rgba(200, 200, 255, 0.4);
//       pointer-events: none;
//     }

//     .column-resize-handle {
//       position: absolute;
//       right: -2px;
//       top: 0;
//       bottom: -2px;
//       width: 4px;
//       background-color: #adf;
//       pointer-events: none;
//     }

//     p {
//       margin: 0;
//     }
//   }

//   .tableWrapper {
//     padding: 1rem 0;
//     overflow-x: auto;
//   }

//   .resize-cursor {
//     cursor: ew-resize;
//     cursor: col-resize;
//   }
// }
</style>
