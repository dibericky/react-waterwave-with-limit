import React from "react";

import { WaterWave } from "ant-design-pro/lib/Charts";
import "ant-design-pro/dist/ant-design-pro.css";

import "./styles.css";

function Limit({ value, radius, max, color }) {
  const percentageValue = (value / max) * 100;
  const heightValue = (percentageValue * (2 * radius)) / 100;
  const heightOverMiddle = Math.abs(heightValue - radius);
  const width =
    2 * Math.sqrt(Math.pow(radius, 2) - Math.pow(heightOverMiddle, 2));
  return (
    <div
      style={{
        position: "absolute",
        width: width,
        left: radius - width / 2,
        bottom: `${percentageValue}%`,
        height: 2,
        backgroundColor: color,
        zIndex: 9999
      }}
    />
  );
}
export default function WaterWaveWithLimit({
  size,
  limit,
  value,
  max,
  title,
  colorOverLimit,
  colorUnderLimit,
  colorLineLimit
}) {
  const valuePercentage = (value / max) * 100;
  const colorWaterWave = value > limit ? colorOverLimit : colorUnderLimit
  return (
    <div
      style={{
        height: size,
        width: size,
        position: "relative"
      }}
    >
      <Limit value={limit} radius={size / 2} max={max} color={colorLineLimit} />
      <WaterWave
        color={colorWaterWave}
        height={size}
        key={`${value}-${colorWaterWave}`}
        title={title}
        percent={valuePercentage}
      />
    </div>
  );
}

WaterWaveWithLimit.defaultProps = {
  colorLineLimit: "rgba(100, 100, 100, 0.5)",
  colorUnderLimit: "#00f",
  colorOverLimit: "#f00",
  size: 150
};
