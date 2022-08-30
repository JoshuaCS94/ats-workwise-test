import { cn } from '../../../utils'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: 'outlined' | 'contained' | 'gradient' | 'ghost' | 'link'
  color?: 'primary' | 'secondary'
  size?: 'large' | 'normal' | 'small' | 'tiny'
  loading?: boolean
}

const classes = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  contained: '',
  outlined: 'btn-outline',
  gradient: 'bg-gradient-to-r from-transparent to-black/40 border-0',
  ghost: 'btn-ghost',
  link: 'btn-link',
  large: 'btn-lg',
  normal: '',
  small: 'btn-sm',
  tiny: 'btn-xs',
}

export const Button = ({
  variant = 'outlined',
  color = 'primary',
  size = 'normal',
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      'btn px-6 normal-case',
      classes[variant],
      classes[color],
      classes[size],
      loading && 'loading',
      className
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
