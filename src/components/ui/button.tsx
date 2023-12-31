import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const button = cva("button rounded", {
  variants: {
    intent: {
      primary: ["bg-tiptap-primary", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
    },
    size: {
      small: ["text-sm", "py-[4px]", "px-2"],
      medium: ["text-base", "py-[6px]", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
)
