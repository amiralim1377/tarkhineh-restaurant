function OrderDescription() {
  return (
    <div className="w-full rounded-md border border-gray-300 p-4">
      <div className="">
        <div className="flex items-start gap-2">
          <img src="/icons/document-normal.svg" alt="" />
          <form action="" className="w-full">
            <textarea
              className="min-h-36 w-full placeholder:text-xs md:px-1 md:placeholder:text-base"
              placeholder="توضیحات سفارش(اختیاری)"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDescription;
