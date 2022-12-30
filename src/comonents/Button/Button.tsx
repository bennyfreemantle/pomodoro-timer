import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <button className="bg-slate-700 rounded-2xl">{children}</button>;
}
