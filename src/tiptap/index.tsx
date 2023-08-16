import { useEditor, EditorContent } from "@tiptap/react"
import { AllExtensions } from "tiptap/core/all-kit"
import "./tiptap.css"
// import { initValue } from "./init-value"
import { forwardRef, useImperativeHandle } from "react"
import ToolBar from "./tool-bar"

export interface TiptapEditorProps {
  toolbar?: boolean
}

const TiptapEditor = forwardRef((props: TiptapEditorProps, ref) => {
  const { toolbar = true } = props

  const editor = useEditor({
    extensions: AllExtensions,
    // content: initValue,
  })

  useImperativeHandle(ref, () => ({
    editor,
  }))

  return (
    <>
      {toolbar && editor && (
        <div className="fixed top-14 bg-bgColor p-2 min-h-[40px] w-full left-0 border-1 border-solid border-[#eee] z-10 flex justify-center">
          <ToolBar editor={editor} />
        </div>
      )}
      {/* {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            bold
          </button>
        </BubbleMenu>
      )} */}
      {/* {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
          >
            h1
          </button>
        </FloatingMenu>
      )} */}
      <EditorContent editor={editor} />
    </>
  )
})

export default TiptapEditor
