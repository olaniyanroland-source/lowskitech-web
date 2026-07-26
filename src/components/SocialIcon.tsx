type SocialIconProps = {
  name: "x" | "linkedin" | "instagram" | "facebook";
  className?: string;
};

export default function SocialIcon({ name, className = "h-4 w-4" }: SocialIconProps) {
  if (name === "x") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.53 3h3.36l-7.34 8.39L22.18 21h-6.76l-5.29-6.92L4.07 21H.71l7.85-8.98L.28 3h6.93l4.79 6.33L17.53 3Zm-1.18 16.31h1.86L6.2 4.6h-2l12.15 14.71Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.23 21h3.5V9.75h-3.5V21ZM9.03 9.75H12.4v1.54h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.39V21h-3.5v-5.45c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21H9.03V9.75Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4.25" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.35" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.45" cy="7.55" r="1.05" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.2V6.55c0-.8.18-1.35 1.38-1.35h1.72V2.14A23.5 23.5 0 0 0 14.8 2c-2.48 0-4.18 1.51-4.18 4.29V8.2H7.8v3.43h2.82V22h3.58V11.63h2.8l.45-3.43H14.2Z" />
    </svg>
  );
}
