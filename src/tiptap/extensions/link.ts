// 插入链接

import { Extension } from '@tiptap/core'

import { Plugin } from 'prosemirror-state'

import { TextSelection } from 'prosemirror-state'





export default class Link extends Extension {
  get name() {
    return 'link'
  }

  get defaultOptions() {
    return {
      HTMLAttributes: {},
      openOnClick: true,
      target: '_blank',
      rel: 'noopener noreferrer',
      autolink: false
    }
  }

  get schema() {
    return {
      attrs: {
        href: {
          default: null
        },
        target: {
          default: this.options.target
        },
        rel: {
          default: this.options.rel
        }
      },
      inclusive: false,
      group: 'inline',
      selectable: false,
      parseDOM: [
        {
          tag: 'a[href]',
          // @ts-ignore
          getAttrs: (dom) => ({
            href: dom.getAttribute('href'),
            target: dom.getAttribute('target'),
            rel: dom.getAttribute('rel')
          })
        }
      ],
      // @ts-ignore
      toDOM: (node) => [
        'a',
        {
          ...this.options.HTMLAttributes,
          ...node.attrs
        },
        0
      ]
    }
  }

  commands({ type: }) {
    return (attrs) => {
      if (attrs.href) {
        return this.editor.commands.setLink(attrs)
      }

      return this.editor.commands.unsetLink()
    }
  }

  keys({ type }) {
    return {
      'Mod-k': () => this.editor.commands.setLink()
    }
  }

  get plugins() {
    return [
      new Plugin({
        props: {
          handleClick: (view, pos, event) => {
            const { schema, doc, tr } = view.state
            const { openOnClick } = this.options
            const { node, $pos } = doc.resolve(pos)

            if (node.type !== schema.nodes.link) {
              return false
            }

            if (openOnClick) {
              const href = node.attrs.href
              const target = node.attrs.target

              if (href) {
                window.open(href, target)
              }
            }

            const transaction = tr.setSelection(
              TextSelection.create(doc, $pos.pos, $pos.pos + node.nodeSize)
            )

            view.dispatch(transaction)

            return true
          }
        }
      })
    ]
  }

  get view() {
    return LinkView
  }
}
