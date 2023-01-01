import React from "react";
import useCountdown from "../../hooks/useCountdown";
import formatMillisecondsToTime from "../../utils/formatMillisecondsToTime";

export default function Clock() {
  const [time, pause, resume] = useCountdown(25000000000);
  const timeString = formatMillisecondsToTime(time);

  return (
    <div className="flex items-center justify-center mt-8">
      <svg
        className=""
        strokeDasharray={1005}
        strokeDashoffset={100}
        height="360"
        width="360"
      >
        <circle
          cx="180"
          cy="180"
          r="160"
          stroke="#e2e8f0"
          strokeWidth="10"
          strokeLinecap="round"
          fill="#334155"
        />
        <text
          x="180"
          y="180"
          fill="#e2e8f0"
          textAnchor="middle"
          fontSize={"2rem"}
          alignmentBaseline="middle"
          fontFamily="Helvetica"
        >
          {timeString}
        </text>
      </svg>
    </div>
  );
}
