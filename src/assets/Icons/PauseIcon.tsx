type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

const PauseIcon = ({ color = "currentColor", className = "" }: IconProps) => {
  return (
    <svg
      viewBox="-1 0 8 8"
      // width={size}
      // height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M172 3605C171.448 3605 171 3605.448 171 3606L171 3612C171 3612.552 171.448 3613 172 3613C172.552 3613 173 3612.552 173 3612L173 3606C173 3605.448 172.552 3605 172 3605ZM177 3606L177 3612C177 3612.552 176.552 3613 176 3613C175.448 3613 175 3612.552 175 3612L175 3606C175 3605.448 175.448 3605 176 3605C176.552 3605 177 3605.448 177 3606Z"
        transform="translate(-171 -3605)"
      />
    </svg>
  );
};

export default PauseIcon;
