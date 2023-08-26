import BulitInMention from "@tiptap/extension-mention"
import { ReactRenderer } from "@tiptap/react"
import tippy from "tippy.js"
import MentionWrapper, { MentionProps } from "tiptap/core/wrappers/mention"

const suggestion = {
  items: ({ query }: any) => {
    return ["Apple", "Apricot", "AAA", "BBB", "CCC"]
      .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5)
  },

  render: () => {
    let component: ReactRenderer<MentionProps>
    let popup: any

    return {
      onStart: (props: any) => {
        console.log("props", props)

        component = new ReactRenderer(MentionWrapper, {
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

const Mention = BulitInMention.extend({
  // addAttributes() {
  //   return {
  //     id: {
  //       default: "",
  //       parseHTML: getDatasetAttribute("id"),
  //     },
  //     label: {
  //       default: "",
  //       parseHTML: getDatasetAttribute("label"),
  //     },
  //   }
  // },
}).configure({
  HTMLAttributes: {
    class: "mention",
  },
  suggestion,
})

export default Mention
