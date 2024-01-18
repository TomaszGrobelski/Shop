import tw from 'tailwind-styled-components';

export const SummaryContainer = tw.div`flex min-w-[300px] max-w-[660px] flex-col gap-3 font-bold`;

export const SummaryTitle = tw.h2`mt-6 text-[24px]`;

export const SubtotalBox = tw.div`flex items-center justify-between py-3`;

export const SubtotalTitle = tw.p`flex items-center gap-3 opacity-90`;

export const ShippingBox = tw.div`flex items-center justify-between py-2`;

export const EstimatedTaxBox = tw.div`flex flex-col gap-2 border-b-[1px] py-3`;

export const DiscountSection = tw.div`flex flex-col gap-1`;

export const DiscountBox = tw.div`flex justify-between`;

export const DiscountInfoBox = tw.div`flex justify-between text-green-700`;

export const TotalAmountSection = tw.div`flex items-center justify-between border-b-[1px] py-3`;

export const CheckoutBox = tw.div`min-w-[300px] max-w-[500px] self-center font-bold`;

export const EstimatedTaxFlexBox = tw.div`flex justify-between`;
