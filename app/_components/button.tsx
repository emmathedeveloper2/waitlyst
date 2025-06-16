import React from 'react'

type ButtonProps = {
    variant?: "primary" | "secondary" | "destructive",
    children?: React.ReactNode
    className?: string
}

const Button = ({ variant="primary" , children , className , ...props } : ButtonProps) => {
  return <button data-variant={variant} className={`btn ${className}`} {...props}>{children}</button>
}

export default Button