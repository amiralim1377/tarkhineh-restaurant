import { Link } from "react-router-dom";
import FooterForm from "../FooterForm/FooterForm";

function Footer() {
  return (
    <footer className="bg-backgroundfooter flex w-full flex-row items-center justify-between md:py-16">
      <div className="mx-auto flex w-full max-w-8xl justify-between">
        <div className="flex w-full max-w-xl flex-row items-start justify-start gap-4 px-2 py-5 md:justify-between">
          <div className="flex h-full w-full max-w-28 flex-col space-y-2 md:max-w-48">
            <h2 className="text-nowrap text-sm font-bold text-white md:text-xl">
              دسترسی آسان
            </h2>
            <div className="flex flex-col space-y-3 text-nowrap px-4">
              <ul className="flex flex-col space-y-3 text-xs font-medium text-white md:text-sm">
                <li>
                  <Link to="FAQ">پرسش‌های متداول</Link>
                </li>
                <li>
                  <Link to="Rules">قوانین ترخینه</Link>
                </li>
                <li>
                  <Link to="Privacy">حریم خصوصی</Link>
                </li>
              </ul>
              <div>
                <img src="/footer/Social Media.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex h-full w-full max-w-28 flex-col space-y-2 md:max-w-48">
            <h2 className="text-nowrap text-sm font-bold text-white md:text-xl">
              شعبه‌های ترخینه
            </h2>
            <div className="flex flex-col space-y-3 px-4">
              <ul className="flex flex-col space-y-3 text-nowrap text-xs text-white md:text-sm">
                <li>
                  <Link>شعبه اکباتان</Link>
                </li>
                <li>
                  <Link>شعبه چالوس</Link>
                </li>
                <li>
                  <Link>شعبه اقدسیه</Link>
                </li>
                <li>
                  <Link>شعبه ونک</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden w-full max-w-xl items-end py-5 md:flex md:justify-end">
          <FooterForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
