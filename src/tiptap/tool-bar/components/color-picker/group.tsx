import { createPalette, Palette } from "./palette"
import { ColorPickerItem } from "./item"

export interface ColorsGroupProps {
  onSelect: (color: string) => void
}

const ColorsGroup = ({ onSelect }: ColorsGroupProps) => {
  return (
    <div className="p-2 border-b border-solid border-[#eee]">
      {Palette.colors.map((colors, index) => {
        return (
          <div key={index}>
            {colors.map((color, i) => (
              <ColorPickerItem
                key={i}
                color={color}
                palette={createPalette(Palette.colors)}
                activeColors={[]}
                onSelect={onSelect}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default ColorsGroup
