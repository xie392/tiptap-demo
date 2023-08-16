# 如何开发一个插件

## 1. 创建一个插件

```ts
import { Extension } from "@tiptap/core"

const CustomExtension = Extension.create({
  // Your code here
})
```

下面是一个设置背景色擦插件的例子

```ts
import "@tiptap/extension-text-style"

import { Extension } from "@tiptap/core"

/**
 * @see: https://tiptap.dev/guide/typescript
 */
export type ColorOptions = {
  types: string[]
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    backgroundColor: {
      setBackgroundColor: (color: string) => ReturnType
      unsetBackgroundColor: () => ReturnType
    }
  }
}

export const BackgroundColor = Extension.create<ColorOptions>({
  name: "backgroundColor",

  addOptions() {
    return {
      types: ["textStyle"],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (element) => element.style.backgroundColor.replace(/['"]+/g, ""),
            renderHTML: (attributes) => {
              if (!attributes.backgroundColor) {
                return {}
              }

              return {
                style: `background-color: ${attributes.backgroundColor}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setBackgroundColor:
        (color) =>
        ({ chain }) => {
          /**
           * @see: https://tiptap.dev/api/commands
           */
          return chain().setMark("textStyle", { backgroundColor: color }).run()
        },
      unsetBackgroundColor:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { backgroundColor: null })
            .removeEmptyTextStyle()
            .run()
        },
    }
  },
})
```

`Tippap` 是建立在 `ProseMirror` 之上的，它有一个非常强大的 `API`。要访问它，我们提供包`@tiptap/pm`。这个包提供了所有重要的 `ProseMirror` 包，如 `prosemirror-state`，`prosemirror-view` 或 `prosemirror-model`。使用该包进行自定义开发可以确保您始终拥有 `Tippap` 所使用的相同版本的 `ProseMirror`。这样，我们可以确保 `Tippap` 和所有扩展彼此兼容，并防止版本冲突。另一个好处是，你不需要手动安装所有的 `ProseMirror` 包，特别是如果你没有使用 `npm` 或任何其他支持自动对等依赖解析的包管理器。

- @tiptap/pm/changeset
- @tiptap/pm/collab
- @tiptap/pm/commands
- @tiptap/pm/dropcursor
- @tiptap/pm/gapcursor
- @tiptap/pm/history
- @tiptap/pm/inputrules
- @tiptap/pm/keymap
- @tiptap/pm/markdown
- @tiptap/pm/menu
- @tiptap/pm/model
- @tiptap/pm/schema-basic
- @tiptap/pm/schema-list
- @tiptap/pm/state
- @tiptap/pm/tables
- @tiptap/pm/trailing-node
- @tiptap/pm/transform
- @tiptap/pm/view
