function PaymentGateway() {
  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-4">
      <div className="divide-y md:flex md:w-full md:flex-row md:divide-none">
        <div className="flex w-full items-center py-2 md:max-w-44">
          <div>
            <img src="/icons/card.svg" className="md:w-6" alt="" />
          </div>
          <h4 className="text-sm text-[#353535] md:text-base md:font-bold">
            درگاه پرداخت
          </h4>
        </div>
        <div className="flex w-full flex-col gap-3 py-2 md:max-w-96 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <div className="mx-auto flex flex-row items-center gap-2">
              <div className="max-w-16 rounded-md border">
                <img
                  src="/payment/204bd79c6f9ca84db147c0ae7b6f64a6.jpg"
                  className="min-h-16 object-cover"
                  alt=""
                />
              </div>
              <div className="max-w-16 rounded-md border">
                <img
                  src="/payment/5e8c0b6e9950b56d479a86910e1c9af4.jpg"
                  className="min-h-16 object-cover"
                  alt=""
                />
              </div>
              <div className="max-w-16 rounded-md border">
                <img
                  src="/payment/d4cfd0003de2a111d436dfa9b41ce150.jpg"
                  className="min-h-16 object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-justify text-xs text-[#717171]">
                پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌(لطفا قبل
                از پرداخت فیلترشکن خود را خاموش کنید.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
