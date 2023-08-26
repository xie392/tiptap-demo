import { Editor } from "@tiptap/core"
import { useState } from "react"

export interface FloatMenuProps {
  editor: Editor
  className?: string
  children: React.ReactNode
  visibility?: "visible" | "hidden"
}

const FloatMenu: React.FC<FloatMenuProps> = (props) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  return (
    <div
      ref={setElement}
      className={props.className}
      style={{ visibility: props.visibility ?? "hidden" }}
    >
      {props.children}
    </div>
  )
}

export default FloatMenu
