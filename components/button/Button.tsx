import React from 'react'
import clsx from 'clsx';
import Link, { LinkProps } from "next/link";
import { twMerge } from 'tailwind-merge'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<LinkProps, "onClick" | 'onTouchStart' | 'onMouseEnter' | 'href'> {
  isLoading?: boolean;
  variant: 'text' | 'outline' | 'fill';
  color: 'primary' | 'secondary' | 'custom';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode
  href?: LinkProps['href']
}

const sizeStyles = {
  small: 'px-3 py-2',
  medium: 'px-4 py-3',
  large: 'px-5 py-4',
}

const variantStyles = {
  text: {
    primary:
      'bg-transparent font-semibold text-zinc-900 hover:bg-zinc-100/40 active:bg-zinc-100/40 active:text-zinc-100/40 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    secondary:
      'bg-transparent font-semibold text-blue-600 hover:bg-blue-100/40 active:bg-blue-100/40 active:text-blue-100/40 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    custom: '',
  },
  outline: {
    primary:
      'border border-slate-700 bg-transparent font-semibold text-zinc-900 hover:bg-zinc-300/60 active:bg-zinc-300/60 active:text-zinc-300/60 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    secondary:
      'border border-slate-700 bg-transparent font-semibold text-blue-600 hover:bg-zinc-200/60 active:bg-zinc-200/60 active:text-zinc-200/60 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    custom: '',
  },
  fill: {
    primary:
      'border border-slate-700 bg-slate-700 font-semibold text-sky-100 hover:bg-slate-700/80 active:bg-slate-700/80 active:text-slate-700/80 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    secondary:
      'border border-blue-600 bg-blue-600 font-semibold text-sky-100 hover:bg-blue-600/80 active:bg-blue-600/80 active:text-blue-600/80 rounded focus:ring-4 focus:outline-none disabled:opacity-75',
    custom: '',
  },
}


function Button({
  type = 'button',
  variant = 'outline',
  color = 'custom',
  className,
  size = 'small',
  children,
  disabled = false,

  // LINK Props
  href,
  as,
  replace = false,
  // button rest Props
  ...restButtonProps
}: IButtonProps) {
  className = clsx(
    'inline-flex items-center',
    twMerge(variantStyles[variant][color],
      sizeStyles[size],
      className)
  );
  if (href) {
    return (
      <Link href={href} as={as} replace={replace} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <button
      type={type}
      className={`btn ${className}`}
      disabled={disabled}
      {...restButtonProps}
    >
      {children}
    </button>
  )
}

export default Button;