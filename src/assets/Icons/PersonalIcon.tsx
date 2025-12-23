type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

const PersonalIcon = ({
  size = 50,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12,12c3.309,0,6-2.691,6-6S15.309,0,12,0,6,2.691,6,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S9.243,1,12,1Zm9,18v5h-1v-5c0-2.206-1.794-4-4-4H8c-2.206,0-4,1.794-4,4v5h-1v-5c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Z"
        fill={color}
      />
    </svg>
  );
};

export default PersonalIcon;
