function FranchiseSpecifications() {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-right text-base font-semibold md:text-lg">
        مشخصات ملک متقاضی{" "}
      </h2>
      <div className="mt-3 flex w-full max-w-md flex-col items-start justify-between gap-3 md:max-w-8xl md:flex-row">
        <input
          type="text"
          className="w-full max-w-md rounded-md border border-gray-300 p-2"
          placeholder="نوع مالکیت"
        />
        <input
          type="text"
          className="w-full max-w-md rounded-md border border-gray-300 p-2"
          placeholder="مساحت ملک (متر مربع)"
        />
        <input
          type="text"
          className="w-full max-w-md rounded-md border border-gray-300 p-2"
          placeholder="سن بنا"
        />
      </div>
    </div>
  );
}

export default FranchiseSpecifications;
