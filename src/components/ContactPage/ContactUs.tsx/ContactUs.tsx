import ContactBoxPattern from "./ContactBoxPattern";
import contactList from "./contactList";

function ContactUs() {
  const contactBox = contactList.map((contact, index) => {
    return (
      <ContactBoxPattern
        key={index}
        image={contact.img}
        title={contact.title}
        description={contact.description}
        times={contact.times}
        days={contact.days}
      />
    );
  });

  return (
    <div className="my-6">
<<<<<<< HEAD
      <h2 className="border-b-[1px] text-[24px] p-6">CONTACT US</h2>
      <div className="grid md:grid-cols-3 gap-14">{contactBox}</div>
=======
      <h2 className="border-b-[1px] p-6 text-[24px]">CONTACT US</h2>
      <div className="grid gap-14 md:grid-cols-3">{contactBox}</div>
>>>>>>> d7429fbb29cddb730079b0695a415bfd9d1f153b
    </div>
  );
}

export default ContactUs;
