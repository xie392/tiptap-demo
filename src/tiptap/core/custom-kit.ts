/**
 * 自定义插件
 */
import { BackgroundColor } from "./extensions/mark/background-color"
import { FontSize } from "./extensions/mark/font-size"
import { Code } from "./extensions/mark/code"
// import { Bold } from "./extensions/mark/bold"
import { Commands } from "./extensions/commands"
import { LineHeight } from "./extensions/mark/line-height"

import { SuggestionsList } from "./wrappers/commands"

export const customExtensions = [
  BackgroundColor,
  FontSize,
  Code,
  Commands.configure({
    renderLabel() {
      return ""
    },
    suggestion: SuggestionsList,
  }),
  LineHeight,
]
