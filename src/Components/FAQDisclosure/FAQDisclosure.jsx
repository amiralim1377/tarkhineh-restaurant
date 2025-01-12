import { Disclosure, Transition } from "@headlessui/react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function FAQDisclosure() {
  return (
    <div className="mx-auto my-10 max-w-md rounded-lg border border-gray-300 bg-gray-100 p-4 shadow-md md:max-w-8xl">
      <Disclosure as="div" className="border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              ترخینه چه امکانات متفاوتی داره؟{" "}
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم
                به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت
                سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل
                آن را به حداقل ممکن می رسونه.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-4 border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟{" "}
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران،
                هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد
                تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل
                می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-4 border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟{" "}
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام
                خریدهای شما نمایش داده می شه.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-4 border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              چه راه هایی برای پرداخت دارم؟{" "}
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب
                کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-4 border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان
              است؟{" "}
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب
                رستوران است و در صورت تغییر قیمت از طرف رستوران این تغییر در
                وبسایت ترخینه بلافاصله قابل مشاهده است.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-4 border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟
              {open ? (
                <ExpandLess className="h-5 w-5 text-green-600 transition duration-500 ease-in-out" />
              ) : (
                <ExpandMore className="h-5 w-5 text-[#353535] transition duration-500 ease-in-out" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-opacity duration-500 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-gray-700 md:text-base">
                برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در
                قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت
                برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده
                کنید.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default FAQDisclosure;
