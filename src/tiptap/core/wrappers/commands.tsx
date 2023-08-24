import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Editor } from "@tiptap/core"
import { NodeType } from "tiptap/shared"

export interface ItemsOptions {
  type: keyof typeof NodeType
  name: string
  title: string
  command: (editor: Editor) => void
  options?: string[]
  defaultValue?: string
  content?: React.ReactNode
}

export interface CommandsProps {
  items: ItemsOptions[]
  command: (props: { id: string; type: keyof typeof NodeType }) => void
  editor: Editor
}

const CommandsWrapper: React.FC<CommandsProps> = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectItem = (item: ItemsOptions) => {
    item.command(props.editor)
    props.command({ id: "", type: 'BLOCK' })
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
            cursor-pointer text-sm hover:text-blue-300 transition-all duration-400 ease-in-out px-5 py-1`}
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

export default CommandsWrapper
