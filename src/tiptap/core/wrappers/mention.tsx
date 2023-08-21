import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { ReactRenderer } from "@tiptap/react"
import tippy from "tippy.js"

export interface MentionProps {
  items: string[]
  command: (props: { id: string }) => void
}

const MentionWrapper: React.FC<MentionProps> = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (index: number) => {
    const item = props.items[index]

    if (item) {
      props.command({ id: item })
    }
  }

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length)
  }

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length)
  }

  const enterHandler = () => {
    selectItem(selectedIndex)
  }

  useEffect(() => setSelectedIndex(0), [props.items])

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: any }) => {
      if (event.key === "ArrowUp") {
        upHandler()
        return true
      }

      if (event.key === "ArrowDown") {
        downHandler()
        return true
      }

      if (event.key === "Enter") {
        enterHandler()
        return true
      }

      return false
    },
  }))

  return (
    <div className="shadow-xl border border-solid border-[#eee] rounded p-2 flex flex-col gap-2 pl-3 pr-3">
      {props.items.length ? (
        props.items.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer text-blue-500 hover:text-blue-300 transition-all duration-400 ease-in-out"
            onClick={() => selectItem(index)}
          >
            {item}
          </div>
        ))
      ) : (
        <div className="text-sm">No Result</div>
      )}
    </div>
  )
})

export const SuggestionsList = {
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

export default MentionWrapper
