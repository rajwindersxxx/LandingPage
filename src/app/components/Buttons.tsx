interface props {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className }: props) {
  return (
    <div className="p-1 rounded-full">
      <button
      className={` py-2 min-w-40 rounded-full  bg-color3 relative overflow-hidden  ${className}`}
        >
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
        </button>
    </div>
  );
}

export function SecondaryButton({ children, className }: props) {
  return (
    <button
      className={`ring-1 py-2 min-w-40 rounded-full ring-color2 shadow-red-900 relative overflow-hidden ${className}`}
    >
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function NavPrimaryButton({ children, className }: props) {
  return (
    <button
      className={`ring-1 py-2 rounded-full ring-color2 bg-color3 relative overflow-hidden  ${className}`}
    >
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
export function NavSecondaryButton({ children, className }: props) {
  return (
    <button
      className={`ring-1 py-2 min-w-40 rounded-full ring-color2 shadow-red-900 relative overflow-hidden ${className}`}
    >
      {children}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
        <div className="glow mx-auto rounded-lg"></div>
      </div>
    </button>
  );
}
