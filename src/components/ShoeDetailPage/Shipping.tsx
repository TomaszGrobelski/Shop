import AccordionShipping from "./AccordionShipping";

function Shipping() {
  return (
    <div className="opacity-90">
      <div className="my-10">
        <div>Free Shipping*</div>
        <p className="text-[16px] my-2">To get accurate shipping information <span className="border-b-[1px] border-black">Edit Location</span> </p>
        <div className="mt-8">Free Pickup</div>
        <button className="border-b-[1px] border-black">Find a Store</button>
        <p className="text-gray-400 text-[14px] my-6">*Faster Shipping options may be available</p>
      </div>
      <div className="my-10">
        <p>
          The radiance lives on in the Nika, the b-ball OG that puts a fresh spin on what you know best: durably
          stitched overlays, clean finishes and the perfect amount of flash to make you shine.
        </p>
        <ul className="my-8 list-disc list-inside">
          <li>Shown: White/White</li>
          <li>Style: CW2288-111</li>
        </ul>
        <span className="border-b-[1px] border-black">View Product Details</span>
      </div>
      <div className="border-t-[1px] my-10">
        <AccordionShipping title="Size & Fit">
          <ul>
            <li>Fits large; we recommend ordering a half size down</li>
            <li>Size Guide</li>
          </ul>
        </AccordionShipping>
        <AccordionShipping title="Shipping & Returns">
          <p>
            Free standard shipping on orders $50+ and free 60-day returns for Nika Members. Learn more. Return policy
            exclusions apply.
          </p>
          <p>Pick-up available at select Nika Stores.</p>
        </AccordionShipping>
        <AccordionShipping title="Shipping & Returns">
          <p>
            Free standard shipping on orders $50+ and free 60-day returns for Nika Members. Learn more. Return policy
            exclusions apply.
          </p>
          <p>Pick-up available at select Nika Stores.</p>
        </AccordionShipping>
      </div>
    </div>
  );
}

export default Shipping;
