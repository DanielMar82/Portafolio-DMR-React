type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

const ArrowIcon = ({
  color = "currentColor",
  className = "",
  rotate = 180,
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.285 3.85831C11.0618 2.56363 12.9382 2.56363 13.715 3.85831L22.1826 17.971C22.9824 19.3041 22.0222 21 20.4676 21H3.53238C1.97779 21 1.01757 19.3041 1.81739 17.971L10.285 3.85831Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
