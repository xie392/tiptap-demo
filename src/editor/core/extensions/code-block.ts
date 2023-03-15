import { VueNodeViewRenderer } from '@tiptap/vue-3'
import BuiltInCodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import CodeBlock from 'tiptap/core/wrappers/code-block'
import { lowlight } from 'lowlight'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    language: {
      setCodeBolck: (language: string) => ReturnType
    }
  }
}

export const CodeBlock = BuiltInCodeBlockLowlight.extend({
  content: 'CodeBlock',
  group: 'block',
  defining: true,
  selectable: true,
  draggable: true,
  atom: true,

  addOptions() {
    return {
      ...this.parent?.(),
      lowlight,
      HTMLAttributes: {
        class: 'code-block'
      },
      defaultLanguage: 'auto'
    }
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (element) => element.getAttribute('data-language'),
        renderHTML: (attributes) => {
          if (!attributes.language) {
            return {
              'data-language': this.options.defaultLanguage
            }
          }

          return {
            'data-language': attributes.language
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'pre[data-type="codeBlock"]'
      }
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['pre', mergeAttributes(HTMLAttributes, { 'data-type': 'codeBlock' })]
  },

  addCommands() {
    return {
      ...this.parent?.(),
      setCodeBolck:
        (language) =>
        ({ commands }) => {
          return commands.setNode('codeBlock', { language })
        }
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(CodeBlock)
  }
})
