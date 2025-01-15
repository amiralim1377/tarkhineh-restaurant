function DesktopCartItemCards() {
  return (
    <div className="border-gray-30 flex max-h-[560px] w-full max-w-4xl flex-col space-y-4 overflow-y-scroll rounded-lg border-2 p-3">
      {Array.from({ length: 20 }).map((_, index) => (
        <>
          <div className="flex flex-row rounded-lg border hover:bg-[#EDEDED]">
            <div className="w-full max-w-44">
              <img
                src="/public/menu/IranianFood/c18324ae6672db4300937e223eb47955.jpg"
                className="min-h-40 object-cover"
                alt=""
              />
            </div>
            <div className="w-full p-2">
              <div className="flex h-full flex-col justify-between p-2">
                <div className="flex flex-row items-center justify-between">
                  <h5 className="text-xl font-semibold text-[#353535]">
                    پاستا سبزیجات
                  </h5>
                  <div>
                    <img src="/public/icons/trash.svg" className="w-6" alt="" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-sm">
                      اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-base text-[#CBCBCB] line-through">
                      ۲۸۰٬۰۰۰
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-300 text-xs text-red-800">
                      %۱۰
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex w-full max-w-16 flex-row items-center justify-center gap-3 rounded-lg bg-[#E5F2E9] p-2">
                    <div>
                      <img src="/icons/+.svg" alt="" />
                    </div>
                    <span className="text-sm text-green-primary-500">2</span>

                    <div>
                      <img src="/icons/-.svg" alt="" />
                    </div>
                  </div>
                  <div className="text-xl text-[#353535]">۲۵۲٬۰۰۰تومان</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default DesktopCartItemCards;
