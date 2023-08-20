import { Select, Tooltip } from "antd"

// interface Options {
//   label: string
//   value: string
// }

export interface ButtonSelectProps {
  options: string[]
  defaultValue: string
  width?: number | string
  bordered?: boolean
  selectChange?: (value: string) => void
  title?: string
}

const ButtonSelect = (props: ButtonSelectProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    props.selectChange?.(value)
  }

  const options = props.options.map((item) => ({ label: item, value: item }))

  return (
    <Tooltip title={props.title} placement="bottom" zIndex={100}>
      <Select
        defaultValue={props.defaultValue}
        style={{ width: props.width ?? 100 }}
        onChange={handleChange}
        bordered={props.bordered ?? true}
        size="middle"
        options={options}
        title=""
      />
    </Tooltip>
  )
}

export default ButtonSelect
