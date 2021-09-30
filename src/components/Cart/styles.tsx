import tw from "tailwind-styled-components";

// Cart items
export const CartWrapper = tw.div`cart relative`;
export const CartIcon = tw.img``;

// Cart Bucket
export const CartListWrapper = tw.div`cart absolute mt-20 bg-red-300 right-1 pr-4 pl-8`;

// Overlay black
type CartBgOverlayProps = {
  $isActive: boolean;
};
export const CartBgOverlay = tw.div<CartBgOverlayProps>`
  ${({ $isActive = false }) => ($isActive ? "" : "hidden")}
  cart-bg fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-10`;
