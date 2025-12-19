type ButtonVariant = 'primary' | 'secondary';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

const variantStyle = {
  primary: 'bg-primary text-white',
  secondary: 'bg-gray-200 text-black',
};

export default function Button({
  children,
  type = 'button',
  onClick,
  disabled,
  className = '',
  variant = 'primary',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-semibold ${className} ${variantStyle[variant]}`}
    >
      {children}
    </button>
  );
}
