import { Tooltip, Popover } from "antd"
import { Icon, IconName } from "../../icon"
import React from "react"
import { ButtonPopoverType } from "../bar-items"
import { defaultColor } from "../bar-items"

export interface ButtonPopoverProps {
  title?: string
  iconName: IconName
  content: React.ReactNode
  color?: string
}

const ButtonPopover: React.FC<ButtonPopoverProps> = ({
  title,
  iconName,
  content,
  color,
}: ButtonPopoverProps) => {
  return (
    <Tooltip title={title} placement="bottom">
      <Popover
        placement="bottomLeft"
        content={content}
        trigger="click"
        className="w-[1.75rem] h-[1.75rem] flex items-center justify-center cursor-pointer"
        style={{ padding: 0 }}
      >
        <div className="flex flex-col gap-[1px]">
          <Icon name={iconName} />
          {iconName === ButtonPopoverType.FontColor && (
            <div className="w-[15px] h-[2px]" style={{ background: color ?? defaultColor }}></div>
          )}
        </div>
      </Popover>
    </Tooltip>
  )
}

export default ButtonPopover
