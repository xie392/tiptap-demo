import Placeholder from "@tiptap/extension-placeholder"

const placeholders = ["使用 markdown 语法进行输入", "请输入内容", "输入 / 查看命令"]

export default Placeholder.configure({
  placeholder: ({ node }) => {
    if (node.type.name === "heading") {
      return "请输入标题"
    }

    return placeholders[Math.floor(Math.random() * placeholders.length)]
  },
})
