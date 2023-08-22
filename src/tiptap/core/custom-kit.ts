/**
 * 自定义插件
 */
import { BackgroundColor } from "./extensions/mark/background-color"
import { FontSize } from "./extensions/mark/font-size"
import { Code } from "./extensions/mark/code"
import { Commands } from "./extensions/node/commands"
import { LineHeight } from "./extensions/mark/line-height"

export const customExtensions = [BackgroundColor, FontSize, Code, Commands, LineHeight]
