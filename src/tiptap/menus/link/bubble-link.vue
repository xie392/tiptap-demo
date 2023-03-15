<template>
  <div>
    <!-- <div>
      <input type="checkbox" :checked="isEditable" @change="() => (isEditable = !isEditable)" />
      Editable
    </div> -->
    <!-- :tippyOptions="{ maxWidth: 'calc(100vw - 100px)' }" -->
    <!-- pluginKey="link-bubble-menu" -->
    <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor && editor.isActive('Link')">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        strike
      </button>
    </bubble-menu>
  </div>
</template>

<script setup lang="ts">
import { BubbleMenu } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/core'

const props = defineProps<{ editor: Editor }>()

// props.editor.on('selectionUpdate', () => {
//   console.log("props.editor.isActive('link')", props.editor.isActive('Link'))
// })

// watch(()=>props.editor.isActive('link'), () => {
//   console.log("props.editor.isActive('link')", props.editor.isActive('link'));
// })

// export default {
//   components: {
//     EditorContent,
//     BubbleMenu
//   },

//   data() {
//     return {
//       editor: null,
//       isEditable: true
//     }
//   },

//   watch: {
//     isEditable(value) {
//       this.editor.setEditable(value)
//     }
//   },

//   mounted() {
//     this.editor = new Editor({
//       extensions: [StarterKit],
//       content: `
//         <p>
//           Hey, try to select some text here. You’ll see a formatting menu pop up. And as always, you are in full control about content and styling of this menu.
//         </p>
//       `
//     })
//   },

//   beforeUnmount() {
//     this.editor.destroy()
//   }
// }
</script>

<style scoped></style>
