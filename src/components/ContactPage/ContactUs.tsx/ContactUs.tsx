import ContactBoxPattern from './ContactBoxPattern';
import contactList from './contactList';

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
    <div className='my-6'>
      <h2 className='border-b-[1px] p-6 text-[24px]'>CONTACT US</h2>
      <div className='grid gap-14 md:grid-cols-3'>{contactBox}</div>
    </div>
  );
}

export default ContactUs;
