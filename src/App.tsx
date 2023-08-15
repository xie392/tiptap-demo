import TiptapEditor from "tiptap/index"
import { Button, Space } from "antd"
import React from "react"

const App = () => {
  const editorRef = React.useRef<any | null>(null)

  const getData = (type: string) => {
    if (!editorRef.current) console.log("editorRef.current is null")
    if (type === "html") console.log(editorRef.current.editor.getHTML())
    if (type === "json") console.log(editorRef.current.editor.getJSON())
    if (type === "text") console.log(editorRef.current.editor.getText())
  }

  return (
    <div className="w-full bg-mainColor min-h-screen">
      <header className="w-full h-14 pl-5 pr-5 flex justify-between items-center border-[#eee] border-solid border-b-[1px] bg-bgColor sticky top-0 z-10">
        <h3 className="text-xl font-bold">Tiptap Editor</h3>
        <Space>
          <Button type="primary" onClick={() => getData("html")}>
            打印HTML
          </Button>
          <Button type="primary" onClick={() => getData("json")}>
            打印JSON
          </Button>
          <Button type="primary" onClick={() => getData("text")}>
            打印TEXT
          </Button>
        </Space>
      </header>
      <main className="flex justify-center">
        <div className="xl:w-[1000px] bg-bgColor min-h-[calc(100vh-96px)] mt-[20px] p-7">
          <TiptapEditor ref={editorRef} />
        </div>
      </main>
    </div>
  )
}

export default App