import Link from 'next/link'
import React from 'react'

type LinkButtonProps = {
    variant?: "primary" | "secondary" | "destructive" | 'outline',
    children?: React.ReactNode,
    href: string,
    className?: string,
    target?: string,
}

const LinkButton = ({ variant="primary" , children , href , className , ...props } : LinkButtonProps) => {
  return <button data-variant={variant} className={`btn ${className}`}>
    <Link href={href} className={`flex items-center gap-[8px] link-btn`} {...props}>
        {children}
    </Link>
  </button>
}

export default LinkButton