import AccordionAssists from "./AccordionAssists";

function QuickAssists() {
  return (
    <div className="my-16 ">
      <div className="border-b-[1px] ">
        <h2 className="pl-6 text-[24px] ">QUICK ASSISTS</h2>
        <p className="my-2 pl-6 text-[14px]">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <div className="gap-6 md:grid md:grid-cols-3 md:pl-6">
        <AccordionAssists title="SHIPPING & DELIVERY">
          <p>What are Nika shipping options?</p>
          <p>How do I get free shipping on Nika orders?</p>
        </AccordionAssists>
        <AccordionAssists title="RETURNS">
          <p>What is Nika return policy?</p>
          <p>How do I return my Nika order?</p>
          <p>Where is my refund?</p>
        </AccordionAssists>
        <AccordionAssists title="NIKE MEMBERSHIP">
          <p>What is Nike Membership?</p>
          <p>How do I get Nika newest sneaker releases?</p>
          <p>How do I reset my Nika password?</p>
        </AccordionAssists>
        <AccordionAssists title="ORDERS">
          <p>Where is my Nika order?</p>
          <p>Can I cancel or change my Nika order?</p>
          <p>How do I find the right size and fit?</p>
        </AccordionAssists>
        <AccordionAssists title="COMPANY INFO">
          <p>Do Nike shoes have a warranty?</p>
          <p>Can I recycle my Nika shoes?</p>
          <p>Does Nika offer grants or donations?</p>
        </AccordionAssists>
        <AccordionAssists title="NIKE OFFERS">
          <p>Does Nika offer a student discount?</p>
          <p>Does Nika offer a military discount?</p>
          <p>
            Does Nika offer a first responder and medical professional discount?
          </p>
        </AccordionAssists>
      </div>
    </div>
  );
}

export default QuickAssists;
