import tw from "tailwind-styled-components";

// Cart items
export const CartWrapper = tw.div`cart relative cursor-pointer`;
export const CartIcon = tw.img``;

// Cart Bucket
export const CartListWrapper = tw.div`cart absolute mt-20 bg-red-300 border-radius-md right-1 pr-4 pl-8`;

// Overlay black
type CartBgOverlayProps = {
  $isActive: boolean;
};
export const CartBgOverlay = tw.div<CartBgOverlayProps>`
  ${({ $isActive = false }) => ($isActive ? "block" : "hidden")}
  fixed cart-bg w-full top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-0`;

type CartBoxProps = {
  $isActive: boolean;
};
export const CartBox = tw.div<CartBoxProps>`
  ${({ $isActive }) => ($isActive ? "flex" : "hidden")}
  cart flex bg-white flex-col rounded-md absolute mt-20  border-radius-md right-1 px-8 py-4
`;

export const CartHeader = tw.div`
head flex justify-between py-4  w-full
`;
export const CartTotal = tw.div`
total flex justify-between py-2  w-full
`;
export const CartCheckout = tw.div`
checkout flex flex-col w-full
`;
