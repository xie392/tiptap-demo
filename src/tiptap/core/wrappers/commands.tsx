import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { ReactRenderer } from "@tiptap/react"
import tippy from "tippy.js"
import { Editor } from "@tiptap/core"

export interface ItemsOptions {
  name: string
  title: string
  command: (editor: Editor) => void
  options?: string[]
  defaultValue?: string
  content?: React.ReactNode
}

export interface CommandsProps {
  items: ItemsOptions[]
  command: (props: { id: string }) => void
  editor: Editor
}

const CommandsWrapper: React.FC<CommandsProps> = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (item: ItemsOptions) => {
    item.command(props.editor)
    props.command({ id: "" })
  }

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length)
  }

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length)
  }

  const enterHandler = () => {
    selectItem(props.items[selectedIndex])
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
    <div className="shadow-xl border border-solid border-[#eee] rounded p-2 flex flex-col gap-2 pl-0 pr-0">
      {props.items.length ? (
        props.items.map((item, index) => (
          <div
            key={index}
            className={` 
            ${index === selectedIndex && "bg-blue-100"}
            cursor-pointer text-sm hover:text-blue-300 transition-all duration-400 ease-in-out pr-3 pl-3 pt-1 pb-1`}
            onClick={() => selectItem(item)}
          >
            {item.title}
          </div>
        ))
      ) : (
        <div className="text-sm">No Result</div>
      )}
    </div>
  )
})

export const SuggestionsList = {
  items: () => {
    const items: ItemsOptions[] = [
      {
        name: "Heading",
        title: "标题1",
        command: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
        name: "Heading",
        title: "标题2",
        command: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
    ]

    return items
  },

  render: () => {
    let component: ReactRenderer<CommandsProps>
    let popup: any

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

export default CommandsWrapper
