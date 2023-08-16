import { HexColorInput, RgbaStringColorPicker } from "react-colorful"
import { colord } from "colord"

export interface MoreColorsProps {
  onSelect?: (color: string, isHex: boolean) => void
  color: string
}

const MoreColors = ({ onSelect, color }: MoreColorsProps) => {
  return (
    <div className=" bg-bgColor">
      <RgbaStringColorPicker
        color={color}
        onChange={(color) => onSelect && onSelect(color, true)}
      />
      <HexColorInput
        className="outline-none border border-gray-200 rounded bg-gray-100 text-base uppercase px-2 py-0.5 text-center mt-4"
        prefixed={true}
        alpha={true}
        color={colord(color).toRgbString()}
        onChange={(color) => onSelect && onSelect(colord(color).toRgbString(), true)}
      />
    </div>
  )
}

export default MoreColors
