import EasyAccessNavBar from "../../Components/EasyAccessNavBar/EasyAccessNavBar";
import RulesDisclosure from "../../Components/RulesDisclosure/RulesDisclosure";

function Rules() {
  return (
    <div>
      <div className="bg-Rules flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          قوانین ترخینه{" "}
        </h2>
      </div>
      <EasyAccessNavBar />
      <div className="px-2 md:px-0">
        <RulesDisclosure />
      </div>
    </div>
  );
}

export default Rules;
