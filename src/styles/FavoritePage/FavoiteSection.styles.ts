import tw from 'tailwind-styled-components';

export const FavoritesContainer = tw.div`my-10 p-6`;

export const HeaderContainer = tw.div`flex items-center justify-between`;

export const FavoritesTitle = tw.h2`py-10 text-[24px] sm:text-[32px]`;

export const EmptyMessageBox = tw.div`flex justify-center`;

export const EmptyFavoritesMessage = tw.p`m-6 p-6 font-bold opacity-90`;

export const ShoeCardsContainer = tw.div`relative grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`;

export const FavoriteToggleButton = tw.button`absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white sm:right-3 sm:top-3`;
