import { mergeAttributes, Node } from "@tiptap/core"
import Suggestion, { SuggestionOptions } from "@tiptap/suggestion"
import CommandsWrapper, { CommandsProps, ItemsOptions } from "tiptap/core/wrappers/commands"
import { ReactRenderer } from "@tiptap/react"
import tippy, { Instance, Props } from "tippy.js"
import { NodeType } from "tiptap/shared"
import { PluginKey } from "@tiptap/pm/state"

export type CommandsOptions = {
  HTMLAttributes: Record<string, any>

  suggestion: Omit<SuggestionOptions, "editor">
}

export const CommandsPluginKey = new PluginKey("commands")

export const suggestion = {
  // TODO: "/" 工具栏的按钮
  items: () => {
    const items: ItemsOptions[] = [
      {
        type: NodeType.BLOCK,
        name: "Heading",
        title: "标题1",
        command: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
        type: NodeType.BLOCK,
        name: "Heading",
        title: "标题2",
        command: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
      {
        type: NodeType.BLOCK,
        name: "Blockquote",
        title: "引用",
        command: (editor) => editor.chain().focus().toggleBlockquote().run(),
      },
    ]

    return items
  },

  render: () => {
    let component: ReactRenderer<CommandsProps>
    let popup: Instance<Props>[]

    return {
      onStart: (props: any) => {
        component = new ReactRenderer(CommandsWrapper, {
          props,
          editor: props.editor,
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        })
      },

      onUpdate(props: any) {
        component.updateProps(props)

        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown(props: any) {
        if (props.event.key === "Escape") {
          popup[0].hide()

          return true
        }

        // @ts-ignore
        return component.ref?.onKeyDown(props)
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}

export const Commands = Node.create<CommandsOptions>({
  name: "commands",

  addOptions() {
    return {
      HTMLAttributes: {},
      suggestion: {
        char: "/",
        pluginKey: CommandsPluginKey,
        command: ({ editor, range, props }) => {
          // 处理不同的 mention 节点

          // TODO: 根据 type 的不同，执行不同的命令
          // const { type } = props
          // console.log("type", type, NodeType.BLOCK)

          // if (type === NodeType.NODE) {
          //   console.log("node")
          // } else if (type === NodeType.MARK) {
          //   console.log("mark")
          // } else if (type === NodeType.INLINE) {
          //   console.log("inline")
          // } else if (type === NodeType.BLOCK) {
          //   console.log("block")
          // } else {
          //   console.log("unkown")
          // }

          // 当下一个节点的类型为“text”时，将 range.to 加一
          // 并以空格字符开头
          const nodeAfter = editor.view.state.selection.$to.nodeAfter
          const overrideSpace = nodeAfter?.text?.startsWith(" ")

          if (overrideSpace) {
            range.to += 1
          }

          // 插入 mention 节点
          editor
            .chain()
            .focus()
            .insertContentAt(range, [
              {
                type: this.name,
                attrs: props,
              },
              {
                type: "text",
                text: " ",
              },
            ])
            .run()
          // 移动光标到 mention 节点后
          window.getSelection()?.collapseToEnd()
        },
        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from)
          const type = state.schema.nodes[this.name]
          const allow = !!$from.parent.type.contentMatch.matchType(type)

          return allow
        },
      },
    }
  },

  group: "inline",

  inline: true,

  selectable: false,

  atom: true,

  // addAttributes() {
  //   return {
  //     id: {
  //       default: null,
  //       parseHTML: (element) => element.getAttribute("data-id"),
  //       renderHTML: (attributes) => {
  //         if (!attributes.id) {
  //           return {}
  //         }

  //         return {
  //           "data-id": attributes.id,
  //         }
  //       },
  //     },

  //     label: {
  //       default: null,
  //       parseHTML: (element) => element.getAttribute("data-label"),
  //       renderHTML: (attributes) => {
  //         if (!attributes.label) {
  //           return {}
  //         }

  //         return {
  //           "data-label": attributes.label,
  //         }
  //       },
  //     },
  //   }
  // },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`,
      },
    ]
  },

  // node
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes({ "data-type": this.name }, this.options.HTMLAttributes, HTMLAttributes),
    ]
  },

  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(({ tr, state }) => {
          let isMention = false
          const { selection } = state
          const { empty, anchor } = selection

          if (!empty) {
            return false
          }

          state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
            if (node.type.name === this.name) {
              isMention = true
              tr.insertText(this.options.suggestion.char || "", pos, pos + node.nodeSize)

              return false
            }
          })

          return isMention
        }),
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ]
  },
}).configure({
  HTMLAttributes: {
    class: "commands",
  },
  suggestion,
})
