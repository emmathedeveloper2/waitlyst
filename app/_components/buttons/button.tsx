import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary"| "outline" | "destructive",
    children?: React.ReactNode
    className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    return <button ref={ref} data-variant={variant} className={`btn ${className}`} {...props}>{children}</button>
  }
)

export default Button