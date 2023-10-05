import React from "react";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ children, ...rest }: HeadingProps) => {
  return (
    <h2 {...rest} className="my-0 text-sm font-bold capitalize text-slate-500">
      {children}
    </h2>
  );
};
