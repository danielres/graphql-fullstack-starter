export default ({ asyncError, dismiss }) => {
  if (!asyncError) return null;

  return (
    <div className="relative bg-red-200 px-4 py-2 rounded text-red-900 mb-4">
      <button
        className="absolute top-0 right-0 leading-none mr-1 text-xl font-bold opacity-25 hover:opacity-100"
        aria-label="dismiss"
        title="dismiss"
        onClick={dismiss}
      >
        ×
      </button>
      {asyncError.graphQLErrors[0].message}
    </div>
  );
};
