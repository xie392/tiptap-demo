import { Extensions } from "./extensions"
// base
import StarterKit from "@tiptap/starter-kit"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"

export const AllExtensions = [
  StarterKit,
  Document,
  Paragraph.configure({
    HTMLAttributes: {
      "data-type": "draggable-item",
    },
  }),
  Text,
  ...Extensions,
]
