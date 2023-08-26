import { NodeViewContent, NodeViewWrapper, NodeViewProps } from "@tiptap/react"
import "tiptap/style/hljs.css"

const CodeBlockWrapper: React.FC<NodeViewProps> = (props) => {
  console.log("props", props.node.attrs.language)
  return (
    <NodeViewWrapper>
      <pre className={`language-${props.node.attrs.language}`}>
        <NodeViewContent as="code"></NodeViewContent>
      </pre>
    </NodeViewWrapper>
  )
}

export default CodeBlockWrapper
