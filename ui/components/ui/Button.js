import classnames from "classnames";
import React from "react";

const css = {
  primary:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

export default ({ children, primary, submit, ...props }) => {
  return (
    <button
      className={classnames({
        [css.primary]: primary,
      })}
      {...(submit && { type: submit })}
      {...props}
    >
      {children}
    </button>
  );
};
