import { Editor } from "@tiptap/core"
import { Space } from "antd"
import "./toolbar.css"
import { BarItems, ButtonType, ButtonPopoverType, ButtonSelectType, defaultColor } from "./configs/bar-items"
import { DividerComponent, ButtonComponent } from "./components"
import { ButtonSelect, ButtonPopover } from "./configs/bar-warpper"
import { ColorPicker } from "./components/color-picker"
import { useState } from "react"

interface ToolBarProps {
  editor: Editor
}

const ToolBar = ({ editor }: ToolBarProps) => {
  const [color, setColor] = useState<string>(defaultColor)

  // 设置字体颜色或背景色
  const onColorSelect = (color: string, type: string) => {
    if (type === ButtonPopoverType.FontColor) {
      setColor(color)
      editor.chain().focus().setColor(color).run()
    } else if (type === ButtonPopoverType.BackgroundColor) {
      editor.chain().focus().setBackgroundColor(color).run()
    }
  }

  // 设置字体大小或字体
  const onFontSelect = (value: string, type: string) => {
    if (type === ButtonSelectType.FontSize) {
      editor.chain().focus().setFontSize(value).run()
    } else if (type === ButtonSelectType.FontFamily) {
      editor.chain().focus().setFontFamily(`"${value}"`).run()
    }
  }

  return (
    <div className="toolbar flex h-[40px]">
      <Space size={4}>
        {BarItems.map((item, index) => {
          if (item.type === ButtonType.Divider) return <DividerComponent key={index} />
          else if (item.type === ButtonType.Button)
            return <ButtonComponent editor={editor} item={item} key={index} />
          else if (item.type === ButtonType.ButtonSelect)
            return (
              <ButtonSelect
                key={index}
                title={item.title}
                options={item.options ?? []}
                defaultValue={item.defaultValue ?? ""}
                width={item.name === "fontFamily" ? 100 : 80}
                selectChange={(value: string) => onFontSelect(value, item.name)}
              />
            )
          else if (item.type === ButtonType.ButtonPopover)
            return (
              <ButtonPopover
                key={index}
                title={item.title}
                iconName={item.name}
                content={
                  <ColorPicker
                    defaultColor={item.defaultValue}
                    onSelect={(color: string) => onColorSelect(color, item.name)}
                  />
                }
                color={color}
              />
            )
        })}
      </Space>
    </div>
  )
}

export default ToolBar
