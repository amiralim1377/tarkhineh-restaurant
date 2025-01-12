import { Disclosure, Transition } from "@headlessui/react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function PrivacyDisclosure() {
  return (
    <div className="mx-auto my-10 max-w-md rounded-lg border border-gray-300 bg-gray-100 p-4 shadow-md md:max-w-8xl">
      <Disclosure as="div" className="border-b border-gray-300 pb-4">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between rounded px-4 py-2 text-right text-xs font-semibold transition duration-500 ease-in-out focus:outline-none md:text-lg ${open ? "text-green-600" : "text-[#353535]"}`}
            >
              حریم خصوصی{" "}
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
                ترخینه متعهد می‌شود حریم خصوصی شما را حفظ کند و به آن احترام
                بگذارد. بخش «حریم خصوصی» روش‌های استفاده از اطلاعات شخصی کاربران
                در این وب سایت را شرح می‌دهد. اگر برای سفارش غذای خوب از خدمات
                ما استفاده می‌کنید، سیاست‌های حفظ حریم خصوصی وب‌سایت ترخینه، در
                مورد شما صدق می‌کند. پردازش و ارسال سفارش‌ها نیازمند اطلاعات
                دقیق کاربران است؛ برای این‌که بتوانیم خدمات مطلوب‌تری به شما
                ارائه دهیم، ممکن است به هنگام خرید، ثبت نظر و استفاده از برخی
                امکانات سایت، به اطلاعات شما نیاز داشته باشیم؛ هم‌چنین ترخینه
                برای ارتباط با مشتریان، بهبود رابط کاربری، بهینه‌سازی محتوا و
                تحقیقات بازاریابی، بایستی از اطلاعات کاربران خود استفاده کند.
                این در حالی است که اطلاع‌رسانی خدمات جدید و سرویس‌های ویژه یا
                پروموشن‌ها، اخبار و رویدادها با ارسال ایمیل یا پیامک به کاربران
                انجام می‌شود.{" "}
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
              چه اطلاعاتی را گردآوری می‌کنیم؟{" "}
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
                اطلاعاتی که درباره‌ی شما گردآوری و نگه‌داری می‌کنیم، ممکن است
                شامل موارد زیر باشد: نام و نام خانوادگی شما شماره تلفن همراه
                تاریخ تولد نشانی‌های مورد نظر برای تحویل سفارش‌ها اطلاعات دیگری
                که شما برای ما نوشته‌اید یا از راه‌های دیگر در اختیار ما قرار
                داده‌اید..
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
              چگونه اطلاعات شما را گردآوری می‌کنیم؟{" "}
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
                از شما تقاضا خواهیم کرد اطلاعات خود را در اختیار ما قرار دهید؛
                هنگامی‌که:به‌شکل کاربر مهمان غذا سفارش می‌دهید. در وب‌سایت
                ترخینه یک حساب کاربری ایجاد می‌کنید. در قسمت اعطای نمایندگی، فرم
                پر می‌کنید.{" "}
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
              چرا به شماره تلفن شما نیاز داریم؟{" "}
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
                برای ثبت نام در وب‌سایت ترخینه باید نخست شماره موبایل خود را
                وارد کنید تا کد فعال‌سازی برای شما ارسال شود. شماره تلفن همراه
                شما نقش نام کاربری را ایفا می‌کند. ممکن است به هر دلیل رمز عبور
                خود را فراموش کنید؛ در این موقعیت، می‌توانید از تلفن همراه خود
                کد فعال‌سازی مجدد دریافت کنید. ممکن است برای آگاه کردن شما از
                اخبار و تغییرات جدید از شماره همراهتان استفاده کنیم؛ مانند،
                اطلاع‌رسانی از تغییر شیوه‌ی دسترسی شما به خدمات آنلاین ما، یا
                خدمات جدید و پیشنهادهای خاص.{" "}
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
              فعالیت‌های مرورگر شما در هنگام بازدید از وب‌سایت ترخینه{" "}
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
                هنگامی‌که شما از وب‌سایت ترخینه استفاده می‌کنید، ما اطلاعاتی
                درباره‌ی فعالیت‌های شما گردآوری می‌کنیم که برخی از این اطلاعات
                عبارتند از: نشانی آی. پی. کامپیوتر شما (این نشانی یک شماره‌ی
                دیجیتالی ۱۲ رقمی منحصربه‌فرد است که برنامه‌های اینترنتی
                به‌وسیله‌ی آن کامپیوتر را شناسایی و با آن ارتباط برقرار
                می‌کنند). نوع مرورگری که شما استفاده می‌کنید (مرورگر برنامه‌ای
                است که شما برای دیدن وب‌سایت‌ها از آن استفاده می‌کنید؛ مانند
                Internet Explorer، Firefox، Safari، Google Chrome). زمانی‌که شما
                وارد وب‌سایت شده‌اید و مدت زمانی که از وب‌سایت استفاده کرده‌اید.
                URL مرجع شما (سایتی که شما برای دسترسی و ورود به وب‌سایت ما از
                آن استفاده کرده‌اید). ما با استفاده از این اطلاعات نمی‌توانیم
                شما را شناسایی کنیم، بلکه این اطلاعات را از تعداد بسیار
                بازدیدکنندگان سایت‌مان گردآوری و آن‌ها را تحلیل می‌کنیم؛ با
                استفاده از این اطلاعات، می‌توانیم بفهمیم که کابران چگونه از
                وب‌سایت ما استفاده می‌کنند و فهمیدن این موضوع به ما کمک می‌کند
                خدمات بهتری به آنان ارائه دهیم.{" "}
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
              استفاده از کوکی‌ها و دستگاه‌های ذخیره‌سازی دیگر{" "}
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
                کوکی‌ها فایل‌های اطلاعاتی هستند که روی کامپیوتر شما ذخیره
                می‌شوند تا به وب‌سایت‌ها کمک کنند شما را به خاطر بیاورند. ما و
                همکاران‌مان، با استفاده از کوکی‌ها اطلاعاتی درباره شیوه‌ی
                استفاده شما از وب‌سایت‌مان گردآوری می‌کنیم؛ این اطلاعات ما را در
                بهبود رابط کاربری و محتوای سایت کمک خواهد کرد. شما نیز به
                وسیله‌ی ثبت و ذخیره‌سازی این کوکی‌ها، هنگام ورود مجدد به سایت،
                نیازی به ثبت مجدد نام کاربری و کلمه‌ی عبور نخواهید داشت. هم‌چنین
                ما به وسیله‌ی کوکی‌ها، آخرین وضعیت سفارش روز شما را ذخیره
                می‌کنیم تا شما بتوانید آن‌ها را در پروفایل خود مشاهده کنید.
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
              اطلاعات بیشتر{" "}
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
                در مجموعه‌ی ترخینه، حفظ امنیت اطلاعات شخصی شما را امری بسیار جدی
                و مهم می‌دانیم و در وب‌سایت خود از سیاست‌های امنیتی و
                فناوری‌هایی استفاده می‌کنیم که برای محافظت از اطلاعات شخصی طراحی
                شده‌اند؛ هم‌چنین از روش‌ها و دستورالعمل‌های امنیتی سختی که
                قوانین حفظ حریم خصوصی کاربران به آن‌ها نیاز دارد، پیروی می‌کنیم.
                این روش‌های محافظتی ذخیره‌سازی، استفاده و انتشار همه‌ی اطلاعات
                شما را دربر می‌گیرد و از دسترسی و استفاده‌ی غیرمجاز از این
                اطلاعات جلوگیری می‌کند.{" "}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default PrivacyDisclosure;
