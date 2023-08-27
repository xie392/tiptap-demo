import { useEditor, EditorContent } from "@tiptap/react"
import Collaboration from "@tiptap/extension-collaboration"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
import { AllExtensions } from "tiptap/core"
import "./style/tiptap.css"
// import { initValue } from "./init-value"
import { forwardRef, useImperativeHandle } from "react"
import ToolBar from "./tool-bar"
import { BubbleMenu } from "./core/bubble-menu"
// @ts-ignore
import { WebrtcProvider } from "y-webrtc"
import * as Y from "yjs"

const ydoc = new Y.Doc()
const provider = new WebrtcProvider("tiptap-collaboration-cursor-extension", ydoc)

export interface TiptapEditorProps {
  toolbar?: boolean
}

const TiptapEditor = forwardRef((props: TiptapEditorProps, ref) => {
  const { toolbar = true } = props

  const editor = useEditor({
    extensions: [
      ...AllExtensions,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: "协作者",
          color: "#f783ac",
        },
      }),
    ],
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
      {/* {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}></BubbleMenu>} */}
      {/* {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="shadow-2xl bg-bgColor px-4 py-2 rounded">
            <button className="bg-gray-50 ">BubbleMenu 按钮</button>
          </div>
        </BubbleMenu>
      )} */}
      {/* {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="shadow-2xl bg-bgColor px-4 py-2 rounded">
            <button className="bg-gray-50 ">FloatingMenu 按钮</button>
          </div>
        </FloatingMenu>
      )} */}
      <EditorContent editor={editor} />
    </>
  )
})

export default TiptapEditor
