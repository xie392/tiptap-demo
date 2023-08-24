import { NodeViewContent, NodeViewWrapper, NodeViewProps } from "@tiptap/react"
import "tiptap/style/hljs.css"

const CodeBlockWrapper: React.FC<NodeViewProps> = (props) => {
  console.log("props", props.node.attrs.language)
  return (
    <NodeViewWrapper>
      <pre>
        <NodeViewContent as="code"></NodeViewContent>
      </pre>
    </NodeViewWrapper>
  )
}

export default CodeBlockWrapper
