import React from "react";
import { SubProps } from "./types";

const Sub: React.FC<SubProps> = ({ title, children }: SubProps) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Sub;
