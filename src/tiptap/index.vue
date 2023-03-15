<template>
  <div>
    <ToolBar :editor="editor" v-if="editor" />
    <editor-content :editor="editor" class="editor" />
  </div>
</template>

<script setup lang="ts">
import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
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
