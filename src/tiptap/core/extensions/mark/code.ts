import BuiltInCode from "@tiptap/extension-code"
import type { CodeOptions } from "@tiptap/extension-code"

export const Code = BuiltInCode.extend<CodeOptions>({
  // 允许嵌套粗体之类的内容
  excludes: "",
})
