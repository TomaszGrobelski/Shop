import ContactUs from "./ContactUs.tsx/ContactUs";
import QuickAssists from "./QuickAssists.tsx/QuickAssists";

function ContactSection() {
  return (
    <div className="p-4">
      <h1 className="text-center text-[32px] font-bold opacity-90">GET HELP</h1>
      <ContactUs />
      {/* <div>Form</div> ??????????????????????????????????????? */}
      <QuickAssists />
    </div>
  );
}

export default ContactSection;
