import { markInputRule } from '@tiptap/core'
import { Link as BuiltInLink } from '@tiptap/extension-link'

type Attributes = {
  types: string[]
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    BuiltLink: {
      addLink: (attributes: any) => ReturnType
    }
  }
}

/**
 * 自定义链接
 * 给每个链接添加  rel="noopener noreferrer"
 */
export const BuiltLink = BuiltInLink.extend({
  name: 'link',

  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: false
    }
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      href: {
        default: null
      },
      target: {
        default: null
      },
      rel: {
        default: 'noopener noreferrer'
      }
    }
  },

  addCommands() {
    return {
      ...this.parent?.(),
      addLink:
        (attributes = {}) =>
        ({ commands }) => {
          return commands.setMark('link', attributes)
        }
    }
  }
}).configure({
  openOnClick: false,
  linkOnPaste: true,
  autolink: false
})
