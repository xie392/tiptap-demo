import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import { AllExtensions } from "tiptap/core/all-kit"
import "@/assets/styles/tiptap.css"
import { initValue } from "./init-value"
import { forwardRef, useImperativeHandle } from "react"

export interface TiptapEditorProps {}

const TiptapEditor = forwardRef(({ ...props }: TiptapEditorProps, ref) => {
  // const { get } = props

  const editor = useEditor({
    extensions: AllExtensions,
    content: initValue,
  })

  useImperativeHandle(ref, () => ({
    editor,
  }))

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            bold
          </button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  )
})

export default TiptapEditor
