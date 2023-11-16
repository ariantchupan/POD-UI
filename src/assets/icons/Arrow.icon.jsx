import React from "react";

const ArrowIcon = ({ width, height, color, style }) => {
  return (
    <svg
      width={width ?? "12"}
      height={height ?? "8"}
      viewBox="0 0 12 8"
      fill="none"
      style={style}
    >
      <path
        d="M5.99695 5.38222L1.43944 0.750057C1.10444 0.409877 0.566918 0.417823 0.239532 0.767541C-0.0863304 1.11726 -0.0787172 1.6784 0.256283 2.02017L5.40309 7.25003C5.72134 7.58226 6.268 7.58385 6.58625 7.25162L11.7437 2.02652C12.0787 1.68634 12.0863 1.1252 11.7605 0.773896C11.4346 0.424178 10.8971 0.416233 10.5606 0.756413L5.99543 5.38222H5.99695Z"
        fill={color ?? "#5C8AA7"}
      />
    </svg>
  );
};

export default ArrowIcon;
