import { Editor } from "@tiptap/core"
import { Space, Button, Tooltip, Divider } from "antd"
import "./toolbar.css"
import { BarItems } from "./configs/bar-items"
import { Icon } from "./icon"

interface ToolBarProps {
  editor: Editor
}

const ToolBar = ({ editor }: ToolBarProps) => {
  return (
    <div className="toolbar flex">
      <Space size={4}>
        {BarItems.map((item, index) => {
          if (item.type === "divider")
            return <Divider key={index} className="border-[#ddd] border-1 h-6" type="vertical" />
          else if (item.type === "component" && item.component)
            return <item.component editor={editor} key={index} title={item.title} />
          else
            return (
              <Tooltip placement="bottom" title={item?.title} key={index}>
                <Button
                  icon={<Icon name={item.name} className="text-toolbarIconColor" />}
                  onClick={() => item.command && item.command(editor)}
                  type="link"
                  className={`${
                    editor.isActive(item.name) ? "is-active shadow-sm" : ""
                  } rounded-[0.375rem] p-0`}
                  style={{ width: "1.75rem", height: "1.75rem" }}
                />
              </Tooltip>
            )
        })}
      </Space>
    </div>
  )
}

export default ToolBar
