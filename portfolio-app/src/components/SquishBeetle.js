const SquishBeetle = ({ onDone }) => {
  return (
    <svg
      className="squish-beetle"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <g className="squish-beetle-mark" onAnimationEnd={onDone}>
        <ellipse cx="16" cy="26" rx="3.2" ry="1.4" transform="rotate(-40 16 26)" fill="#90ee90" />
        <ellipse cx="32" cy="26" rx="3.2" ry="1.4" transform="rotate(40 32 26)" fill="#90ee90" />
        <ellipse cx="14" cy="32" rx="3.4" ry="1.3" transform="rotate(-18 14 32)" fill="#90ee90" />
        <ellipse cx="34" cy="32" rx="3.4" ry="1.3" transform="rotate(18 34 32)" fill="#90ee90" />
        <ellipse cx="15" cy="37" rx="3.2" ry="1.2" transform="rotate(12 15 37)" fill="#90ee90" />
        <ellipse cx="33" cy="37" rx="3.2" ry="1.2" transform="rotate(-12 33 37)" fill="#90ee90" />
        <ellipse cx="24" cy="28" rx="8" ry="11" fill="#90ee90" />
        <circle cx="24" cy="15" r="5" fill="#f5f193" />
      </g>
    </svg>
  );
};

export default SquishBeetle;
