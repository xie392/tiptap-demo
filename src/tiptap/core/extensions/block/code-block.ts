// import { findChildren } from "@tiptap/core"
import BuiltInCodeBlock, { CodeBlockOptions } from "@tiptap/extension-code-block"
import { lowlight } from "lowlight/lib/all"
// import { Node as ProsemirrorNode } from "prosemirror-model"
// import { Plugin, PluginKey } from "prosemirror-state"
// import { Decoration, DecorationSet } from "prosemirror-view"
import { ReactNodeViewRenderer } from "@tiptap/react"
import CodeBlockWrapper from "tiptap/core/wrappers/code-block"

export interface CodeBlockLowlightOptions extends CodeBlockOptions {
  lowlight: any
  defaultLanguage: string | null | undefined
  maxHighlightLineNumber?: number
  languageList?: string[]
}

export const CodeBlock = BuiltInCodeBlock.extend<CodeBlockLowlightOptions>({
  draggable: true,

  addOptions() {
    return {
      ...this.parent?.(),
      lowlight: {},
      defaultLanguage: null,
      maxHighlightLineNumber: 200,
      languageList: [
        "auto",
        "javascript",
        "typescript",
        "css",
        "less",
        "scss",
        "html",
        "xml",
        "json",
        "markdown",
        "vue",
        "python",
        "java",
        "c",
        "c++",
        "c#",
        "go",
        "php",
        "powershell",
        "shell",
        "sql",
        "yaml",
        "dockerfile",
        "nginx",
        "ini",
        "makefile",
        "diff",
      ],
    }
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      language: {
        default: this.options.defaultLanguage,
      },
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(CodeBlockWrapper)
  },
}).configure({
  lowlight,
  defaultLanguage: "auto",
})
