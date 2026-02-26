import {forwardRef} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightAdornment?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, error, rightAdornment, id, ...rest}, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 ml-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={id}
            ref={ref}
            className={`focus-secondary w-full bg-background/50 border rounded-xl px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:border-secondary transition-all
              ${rightAdornment ? 'pr-12' : ''}
              ${error ? 'border-red-500/60 focus:ring-red-500/30 focus:border-red-500' : 'border-border-light focus:ring-secondary/50'}`}
            {...rest}
          />
          {rightAdornment && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightAdornment}</div>
          )}
        </div>
        {error && <p className="mt-1.5 ml-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
