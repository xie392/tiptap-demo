import { Editor } from "@tiptap/core"
import { Button, Tooltip, Divider } from "antd"
import { Icon } from "../icon"
import { BarItems } from "../configs/bar-items"

/**
 * 分割线
 * 
 * @returns 
 */
export const DividerComponent = () => (
  <Divider className="border-[#ddd] border-1 h-6" type="vertical" />
)

/**
 * 普通按钮
 * 
 * @returns 
 */
export const ButtonComponent = ({ editor, item }: { editor: Editor; item: BarItems }) => (
  <Tooltip placement="bottom" title={item?.title}>
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

/**
 * 选择框
 * 
 * @returns 
 */
export const SelectComponent = () => <div>seleect</div>
