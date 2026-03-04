type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  rotate?: number;
};

const InstagramIcon = ({
  size = 50,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      id="Layer_1"
      fill="#000"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${color};stroke-miterlimit:10;stroke-width:1.5}`}
          </style>
        </defs>
        <rect
          width={21}
          height={21}
          x={1.5}
          y={1.5}
          className="cls-1"
          rx={3.82}
        />
        <circle cx={12} cy={12} r={4.77} className="cls-1" />
        <circle
          cx={18.2}
          cy={5.8}
          r={1.43}
          style={{
            fill: color,
          }}
        />
      </g>
    </svg>
  );
};

export default InstagramIcon;
