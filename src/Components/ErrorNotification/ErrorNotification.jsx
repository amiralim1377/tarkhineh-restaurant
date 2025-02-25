const ErrorNotification = ({ error }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">خطا:</strong>
      <span className="block sm:inline">{error}</span>
    </div>
  );
};

export default ErrorNotification;
