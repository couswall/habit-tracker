interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type,
  variant = 'primary',
  disabled,
}: Readonly<ButtonProps>) => {
  const base =
    'w-full font-bold py-4 rounded-xl mt-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-none cursor-pointer active:scale-[0.98]';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-[0_8px_25px_rgba(93,173,226,0.3)]',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90 shadow-[0_8px_25px_rgba(190,147,212,0.3)]',
    outline: 'bg-transparent text-text-primary border border-border-light hover:bg-white/5',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-[0_8px_25px_rgba(239,68,68,0.3)]',
  };
  return (
    <button
      className={`${base} ${variantClasses[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
