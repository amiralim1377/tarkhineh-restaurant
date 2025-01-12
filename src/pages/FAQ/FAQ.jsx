import EasyAccessNavBar from "../../Components/EasyAccessNavBar/EasyAccessNavBar";
import FAQDisclosure from "../../Components/FAQDisclosure/FAQDisclosure";

function FAQ() {
  return (
    <div>
      <div className="bg-FAQ flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          سوالات متداول از ترخینه
        </h2>
      </div>
      <EasyAccessNavBar />
      <div className="px-2 md:px-0">
        <FAQDisclosure />
      </div>
    </div>
  );
}

export default FAQ;
