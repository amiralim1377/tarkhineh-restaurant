import { Disclosure, Transition } from "@headlessui/react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function RulesDisclosure() {
  return (
    <div className="mx-auto my-10 max-w-md rounded-lg border border-gray-300 bg-gray-100 p-4 shadow-md md:max-w-8xl">
      <Disclosure as="div" className="border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              حداقل سفارش{" "}
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
                وحداقل سفارشات در رستوران‌های ترخینه، مبلغ ۵۰.۰۰۰ تومان است.
                برای ثبت، پردازش و ارسال سفارشات، باید حداقل، این مبلغ سفارش
                داده شود در غیر اینصورت سفارشات، ثبت نخواهد شد.
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
              فاصله تحویل{" "}
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
                ترخینه در ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله
                از رستوران‌های زنجیره‌ای ترخینه برای ارسال کالا، ۶ کیلومتر است.
                لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب
                کنید و از رعایت کردن حداکثر فاصله برای ارسال سفارشات اطمینان
                حاصل فرمایید.
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
              زمان تحویل{" "}
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
                جدول زمانی تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد
                رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا،
                دوره‌های شلوغ رستوران و غیره باشد، بنابراین در صورت تأخیر لطفا
                صبور باشید.
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
              گزینه‌های پرداخت{" "}
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
                ما گزینه‌های پرداخت مختلفی را می پذیریم، از جمله پرداخت
                اینترنتی، کارت‌های اعتباری یا پول نقد. لطفاً قبل از تکمیل سفارش،
                روش پرداختی را که ترجیح می دهید، تأیید کنید.
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
              دقت سفارش
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
                لطفاً قبل از ارسال، از دقیق بودن تمام جزئیات سفارش خود، از جمله
                موارد منو، دستورالعمل‌های خاص و جزئیات سفارش خود اطمینان حاصل
                کنید تا اختلالی در فرایند پردازش و تحویل سفارشات شما ایجاد نشود
                و سفارشات شما در سریع‌ترین زمان ممکن به دست‌تان برسد.
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
              شرایط لغو سفارش{" "}
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
                شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های زنجیره‌ای
                ترخینه، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است
                محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل
                آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.
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
              شرایط بازگشت سفارش{" "}
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
                اگر سفارش شما انتظارات شما را برآورده نمی کند، لطفاً بلافاصله از
                طریق تماس تلفنی با ما تماس بگیرید؛ ما در اسرع وقت به دنبال حل
                مشکل شما خواهیم بود.{" "}
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
              تخفیفات{" "}
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
                اهر‌گونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط
                خاصی داشته باشد که به وضوح در وب سایت مشخص می‌شود.
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default RulesDisclosure;
