import React from "react";

type Props = {
  color?: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Divider = ({
  color = "#ddd",
  height = 1,
  marginTop = 10,
  marginBottom = 10,
}: Props) => {
  return (
    <div style={{ backgroundColor: color, height, marginTop, marginBottom }} />
  );
};

export default Divider;
