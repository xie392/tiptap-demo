import { Editor } from "@tiptap/core"
import { Tooltip, Popover } from "antd"
import { Icon } from "../../icon"
import { ColorPicker } from "../../components/color-picker"
import React from "react"

export interface FontColorPickerProps {
  editor: Editor
  title?: string
}

const FontColorPicker: React.FC<FontColorPickerProps> = ({
  editor,
  title,
}: FontColorPickerProps) => {
  console.log("editor", editor)

  const onSelect = (color: string) => {
    console.log("select", color)
  }

  return (
    <Tooltip title={title} placement="bottom">
      <Popover
        placement="bottomLeft"
        content={<ColorPicker onSelect={onSelect} />}
        trigger="click"
        className="w-[1.75rem] h-[1.75rem] flex items-center justify-center cursor-pointer"
        style={{ padding: 0 }}
      >
        <Icon name="fontColor" />
      </Popover>
    </Tooltip>
  )
}

export default FontColorPicker
