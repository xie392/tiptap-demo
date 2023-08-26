import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { lowlight } from "lowlight/lib/core"

export default CodeBlockLowlight.configure({
  lowlight,
  defaultLanguage: "plaintext",
  languageClassPrefix: "language-",
  HTMLAttributes: {
    class: "code-block-light",
  },
})
