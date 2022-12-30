import React from "react";

export default function Clock() {
  return (
    <div className="flex items-center justify-center mt-16">
      <svg
        className="-rotate-90"
        strokeDasharray={1005}
        strokeDashoffset={900}
        height="400"
        width="400"
      >
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="#e2e8f0"
          strokeWidth="10"
          strokeLinecap="round"
          fill="#334155"
        />
      </svg>
    </div>
  );
}
