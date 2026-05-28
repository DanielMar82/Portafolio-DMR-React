type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

const PlayIcon = ({ color = "currentColor", className = "" }: IconProps) => {
  return (
    <svg
      viewBox="-0.5 0 7 7"
      // width={size}
      // height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M296.494737 3608.57322L292.500752 3606.14219C291.83208 3605.73542 291 3606.25002 291 3607.06891V3611.93095C291 3612.7509 291.83208 3613.26444 292.500752 3612.85767L296.494737 3610.42771C297.168421 3610.01774 297.168421 3608.98319 296.494737 3608.57322Z"
        transform="translate(-291 -3606)"
      />
    </svg>
  );
};

export default PlayIcon;
