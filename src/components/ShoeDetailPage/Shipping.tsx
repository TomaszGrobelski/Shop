import AccordionShipping from './AccordionShipping';
import {
  EditLocationLink,
  FasterShippingInfo,
  FindStoreButton,
  FreeShippingBox,
  LocationInfo,
  ProductInfoBox,
} from '../../styles/ShoeDetailPage/Shipping.styles';

function Shipping() {
  return (
    <div className='opacity-90'>
      <FreeShippingBox>
        <div>Free Shipping*</div>
        <LocationInfo>
          To get accurate shipping information
          <EditLocationLink>Edit Location</EditLocationLink>
        </LocationInfo>
        <div className='mt-8'>Free Pickup</div>
        <FindStoreButton>Find a Store</FindStoreButton>
        <FasterShippingInfo>*Faster Shipping options may be available</FasterShippingInfo>
      </FreeShippingBox>
      <ProductInfoBox>
        <p>
          The radiance lives on in the Nika, the b-ball OG that puts a fresh spin on what you know best: durably
          stitched overlays, clean finishes and the perfect amount of flash to make you shine.
        </p>
        <ul className='my-8 list-inside list-disc'>
          <li>Shown: White/White</li>
          <li>Style: CW2288-111</li>
        </ul>
        <span className='border-b-[1px] border-black'>View Product Details</span>
      </ProductInfoBox>
      <div className='my-10 border-t-[1px]'>
        <AccordionShipping title='Size & Fit'>
          <ul>
            <li>Fits large; we recommend ordering a half size down</li>
            <li>Size Guide</li>
          </ul>
        </AccordionShipping>
        <AccordionShipping title='Shipping & Returns'>
          <p>
            Free standard shipping on orders $50+ and free 60-day returns for Nika Members. Learn more. Return policy
            exclusions apply.
          </p>
          <p>Pick-up available at select Nika Stores.</p>
        </AccordionShipping>
        <AccordionShipping title='Shipping & Returns'>
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
