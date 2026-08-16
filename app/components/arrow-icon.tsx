type ArrowIconProps = {
  className?: string;
};

export function ArrowUpRight({ className = "" }: ArrowIconProps) {
  return (
    <svg className={`arrow-icon ${className}`} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 13 13 3M5.5 3H13v7.5" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: ArrowIconProps) {
  return (
    <svg className={`arrow-icon ${className}`} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowDown({ className = "" }: ArrowIconProps) {
  return (
    <svg className={`arrow-icon ${className}`} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 2.5v11M4 9.5l4 4 4-4" />
    </svg>
  );
}
