export interface ButtonProps {
  type?: "primary" | "default" | "danger" | "link"
  size?: "large" | "middle" | "small"
  disabled?: boolean
  loading?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, size, disabled, loading, onClick, children, className = "", style = {} } = props

  return (
    <button className={`p-2 ${props.className}`} style={style}>
      {children}
    </button>
  )
}

export { Button }
