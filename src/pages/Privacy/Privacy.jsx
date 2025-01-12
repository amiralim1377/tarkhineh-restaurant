import EasyAccessNavBar from "../../Components/EasyAccessNavBar/EasyAccessNavBar";
import PrivacyDisclosure from "../../Components/PrivacyDisclosure/PrivacyDisclosure";

function Privacy() {
  return (
    <div>
      <div className="bg-Privacy flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          حریم شخصی کاربران
        </h2>
      </div>
      <EasyAccessNavBar />
      <div className="px-2 md:px-0">
        <PrivacyDisclosure />
      </div>
    </div>
  );
}

export default Privacy;
