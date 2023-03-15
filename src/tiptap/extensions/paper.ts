import { mergeAttributes, Node, VueNodeViewRenderer } from '@tiptap/vue-3'
import paper from 'tiptap/components/paper.vue'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    PaperDrawing: {
      setPaper: (attrs: any) => ReturnType
    }
  }
}

export const PaperDrawing = Node.create({
  name: 'paper',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      lines: {
        default: []
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="paper"]'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'paper' })]
  },

  addCommands() {
    return {
      setPaper:
        (attrs = {}) =>
        ({ chain }) => {
          return chain().insertContent({ type: this.name, attrs }).run()
        }
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(paper)
  }
})
