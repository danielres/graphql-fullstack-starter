import classnames from "classnames";

const variants = {
  danger: "bg-red-200 text-red-900",
  info: "bg-blue-200 text-blue-900",
  success: "bg-green-200 text-green-900",
};

export default ({ className, dismiss, children, type = "info" }) => {
  return (
    <div
      className={classnames(
        "relative px-4 py-2 rounded",
        className,
        variants[type]
      )}
    >
      {dismiss && (
        <button
          className="absolute top-0 right-0 leading-none mr-1 text-xl font-bold opacity-25 hover:opacity-100"
          aria-label="dismiss"
          title="dismiss"
          onClick={dismiss}
        >
          ×
        </button>
      )}
      {children}
    </div>
  );
};
