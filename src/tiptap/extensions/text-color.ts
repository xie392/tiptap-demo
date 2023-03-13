import { Extension } from '@tiptap/core'
import { Color } from '@tiptap/extension-color'

export class TextColor extends Extension {
  constructor(options = {}) {
    super(options)
    this.colorExtension = new Color(options)
    this.onColorChange = options.onColorChange
  }

  get name() {
    return 'textColor'
  }

  get defaultOptions() {
    return {
      // 传递给内置的 Color 插件
      palette: ['red', 'green', 'blue']
    }
  }

  // 重写 get plugins 方法，合并 Color 插件的功能
  get plugins() {
    const colorPlugin = this.colorExtension.plugin

    return [
      colorPlugin,
      // 自定义的监听颜色变化的插件
      {
        // 监听编辑器的 state 发生变化
        // 当文本选中时，检查选中的文本颜色
        // 如果颜色发生变化，则触发一个新的事件
        handleDOMEvents: {
          mousedown(view) {
            const { from, to } = view.state.selection
            const color = view.state.doc
              .textBetween(from, to, '\u0000', '\u0000')
              .marks.find((m) => m.type.name === 'color')?.attrs.color
            if (color) {
              view.dispatch(view.state.tr.setMeta('color', color))
            }
            return false
          }
        },

        // 当颜色发生变化时，触发一个自定义事件
        // 传递新的颜色信息
        decorations(state) {
          const meta = state.meta.color
          if (meta) {
            const { from, to } = state.selection
            const decorations = []
            state.doc.nodesBetween(from, to, (node, pos) => {
              node.descendants((child, childPos) => {
                if (child.isText && child.marks.some((m) => m.type.name === 'color')) {
                  const start = Math.max(from, pos + childPos)
                  const end = Math.min(to, pos + childPos + child.nodeSize)
                  decorations.push(Decoration.inline(start, end, { style: `color: ${meta};` }))
                }
              })
            })
            return DecorationSet.create(state.doc, decorations)
          }
          return null
        }
      }
    ]
  }

  // 重写 onSelect 方法，调用 Color 插件的 onSelect 方法，并触发 onColorChange 回调函数
  onSelect(state, color) {
    this.colorExtension.onSelect(state, color)
    if (typeof this.onColorChange === 'function') {
      this.onColorChange(color)
    }
  }
}
