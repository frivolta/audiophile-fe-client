import { useContext, useState } from "react";
import { useHistory } from "react-router";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import { CartContext, ProductWithQty } from "../../hooks/useCart/useCart";
import { formatPrice } from "../../utils";
import { Button } from "../Button";
import { TextBodyExtraLight, TextH6 } from "../Elements/typography";
import { CartProduct } from "./components/CartProduct";
import {
  CartBgOverlay,
  CartBox,
  CartCheckout,
  CartHeader,
  CartIcon,
  CartTotal,
  CartWrapper,
} from "./styles";

export const Cart = () => {
  const history = useHistory();
  const [showCart, setShowCart] = useState<boolean>(false);
  const { products, setProducts: setProductToCart, total } = useContext(
    CartContext
  );

  const productsNumber = getKeysNumber(products);
  const changeQuantity = (product: ProductWithQty, qty: number) =>
    qty > 0
      ? setProductToCart({
          ...products,
          [product.id]: { ...products[product.id], quantity: qty },
        })
      : removeProduct(product);

  const removeProduct = (product: ProductWithQty) => {
    const { [product.id]: id, ...rest } = products;
    setProductToCart({ ...rest });
  };

  const removeAll = () => {
    setProductToCart({});
  };

  return (
    <CartWrapper>
      <CartIcon
        src={IconCart}
        alt="Cart"
        onClick={() => setShowCart(!showCart)}
      />
      <CartBgOverlay $isActive={showCart} onClick={() => setShowCart(false)} />
      <CartBox $isActive={showCart}>
        <CartHeader>
          <TextH6>CART ({productsNumber})</TextH6>
          <button
            className="underline hover:text-primary ml-4"
            onClick={removeAll}
          >
            Remove all
          </button>
        </CartHeader>

        {products &&
          Object.keys(products).map((key, idx) => {
            const product = products[key];
            return (
              <CartProduct product={product} changeQuantity={changeQuantity} />
            );
          })}
        <CartTotal>
          <p className="opacity-50">TOTAL</p>
          <TextH6>$ {formatPrice(total)}</TextH6>
        </CartTotal>
        <CartCheckout>
          <Button onClick={() => history.push("/checkout")} text="CHECKOUT" />
        </CartCheckout>
      </CartBox>
    </CartWrapper>
  );
};

const getKeysNumber = (obj: Object): number =>
  Object.keys(obj).reduce<number>((acc, _) => {
    return acc + 1;
  }, 0);
