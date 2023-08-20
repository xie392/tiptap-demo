import { useState } from "react"
import { createPalette, Palette } from "./palette"
import { ColorPickerItem } from "./item"
import { IconCustom } from "../../icon"
import { ColorIcon, ArrowRightIcon } from "../../icon/icon"
import { Popover } from "antd"
import ColorsGroup from "./group"
import MoreColors from "./more"
import { defaultColor } from '../../configs/bar-items'

// const defaultColor = '#262626'

export interface ColorPickerProps {
  className?: string
  defaultColor?: string
  onSelect: (color: string) => void
  [key: string]: any
}

export const ColorPicker = (props: ColorPickerProps) => {
  const [color, setColor] = useState<string>("")

  const select = (color: string) => {
    setColor(color)
    props.onSelect(color)
  }

  return (
    <div className={`min-w-[250px] rounded bg-bgColor pt-2 pb-2 ${props.className}`}>
      <div
        className="w-full p-2 flex items-center gap-2 hover:bg-[#0000000d] cursor-pointer transition-all delay-100 ease-linear"
        onClick={() => {
          props.onSelect(props.defaultColor ?? defaultColor)
        }}
      >
        <ColorPickerItem
          color={"#262626"}
          palette={createPalette(Palette.colors)}
          activeColors={["#fff"]}
          onSelect={select}
        />
        <span className="text-sm text-textColor select-none">默认</span>
      </div>
      <ColorsGroup onSelect={select} />
      <div className="w-full mt-1 relative">
        <Popover
          placement="rightBottom"
          content={MoreColors({ onSelect: select, color })}
          trigger="click"
        >
          <div className="flex items-center justify-between gap-1 cursor-pointer hover:bg-[#0000000d] transition-all delay-100 ease-linear p-2 ">
            <div className="flex items-center">
              <IconCustom children={<ColorIcon />} />
              <span className="text-sm text-textColor select-none">更多颜色</span>
            </div>
            <IconCustom children={<ArrowRightIcon style={{ color: "rgba(0,0,0,0.2)" }} />} />
          </div>
        </Popover>
      </div>
    </div>
  )
}
