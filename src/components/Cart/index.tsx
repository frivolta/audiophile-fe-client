import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import { CartIcon, CartListWrapper, CartWrapper } from "./styles";

export const Cart = () => {
  return (
    <CartWrapper>
      <CartIcon src={IconCart} alt="Cart" />
      <CartListWrapper>cart</CartListWrapper>
    </CartWrapper>
  );
};
