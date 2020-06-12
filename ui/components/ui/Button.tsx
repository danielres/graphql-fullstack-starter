import classnames from "classnames";
import React from "react";

const css = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold",
};

export default ({
  as = "button",
  className,
  children,
  primary,
  submit,
  ...props
}) => {
  const Element = as;

  return (
    <Element
      className={classnames("py-2 px-4 rounded inline-block", className, {
        [css.primary]: primary,
      })}
      {...(submit && { type: submit })}
      {...props}
    >
      {children}
    </Element>
  );
};
