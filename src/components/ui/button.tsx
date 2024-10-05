export type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
  };
  
  export function Button({ onClick, children, className }: ButtonProps) {
    return (
      <button onClick={onClick} className={`px-4 py-2 ${className}`}>
        {children}
      </button>
    );
  }
  