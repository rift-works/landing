export function ChannelMark({ size = 220, reversed = false }: { size?: number; reversed?: boolean }) {
  const ink = reversed ? "var(--rw-bone)" : "var(--rw-basalt)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={ink}
      role="img"
      aria-hidden="true"
      className="rw-channel"
    >
      <g className="rw-channel-left">
        <path d="M6 6 H26 V32 H21 V58 H6 Z" />
      </g>
      <g className="rw-channel-right">
        <path d="M43 6 H58 V58 H38 V32 H43 Z" />
      </g>
    </svg>
  );
}
