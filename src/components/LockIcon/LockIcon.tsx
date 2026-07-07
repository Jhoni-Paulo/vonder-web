import styled from "styled-components";

const Svg = styled.svg<{ $size?: number }>`
  width: ${({ $size = 14 }) => $size}px;
  height: ${({ $size = 14 }) => $size}px;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
`;

interface LockIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export function LockIcon({ size = 14, color = "currentColor", style }: LockIconProps) {
  return (
    <Svg $size={size} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <rect x="1" y="8" width="14" height="11" rx="2" fill={color} />
      <path
        d="M4 8V5.5a4 4 0 0 1 8 0V8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="14" r="1.5" fill="white" />
    </Svg>
  );
}
