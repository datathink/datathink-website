type Props = {
  className?: string;
  showWordmark?: boolean;
  tone?: "light" | "dark";
};

export function Logo({
  className = "",
  showWordmark = true,
  tone = "light",
}: Props) {
  const wordColor = tone === "light" ? "text-foreground" : "text-black";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="-translate-y-px"
      >
        <title>DataThink mark</title>
        <path
          d="M3 17.5 C 3 17.5, 7 6, 12 6 C 17 6, 21 17.5, 21 17.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="7.5" cy="14" r="1.4" fill="#3d7aff" />
        <circle cx="12" cy="8.5" r="1.4" fill="currentColor" />
        <circle cx="16.5" cy="14" r="1.4" fill="#3d7aff" />
        <circle cx="3" cy="17.5" r="1.4" fill="currentColor" />
        <circle cx="21" cy="17.5" r="1.4" fill="currentColor" />
      </svg>
      {showWordmark && (
        <span
          className={`font-display text-[19px] font-medium tracking-tight ${wordColor}`}
        >
          DataThink
        </span>
      )}
    </span>
  );
}
