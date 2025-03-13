import ContactusBranches from "../../Components/ContactusBranches/ContactusBranches";

function Contactus() {
  return (
    <div>
      <div className="bg-contactus flex w-full items-center justify-center">
        <h2 className="text-base font-bold text-white md:text-4xl">
          با ترخینه در تماس باشید.
        </h2>
      </div>
      <div className="px-2 py-8">
        <ContactusBranches />
      </div>
    </div>
  );
}

export default Contactus;
