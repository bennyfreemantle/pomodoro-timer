import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-slate-300 text-slate-900 rounded-2xl">
      {children}
    </button>
  );
}
