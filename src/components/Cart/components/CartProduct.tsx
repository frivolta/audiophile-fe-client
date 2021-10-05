import { ProductWithQty } from "../../../hooks/useCart/useCart";
import { formatPrice } from "../../../utils";
import { TextSubtitle } from "../../Elements/typography";

export interface CartProductProps {
  product: ProductWithQty;
  changeQuantity: (product: ProductWithQty, qty: number) => void;
}
export const CartProduct = ({ product, changeQuantity }: CartProductProps) => {
  return (
    <div
      className="product flex my-4 justify-left items-center"
      key={product.id}
    >
      <div className="image w-16">
        <img
          src={product.image.mobile}
          alt={product.name}
          className="rounded-md"
        />
      </div>
      <div className="product-description flex-col ml-4 my-8 w-max">
        <p className="text-p font-bold">
          {product.slug.split("-")[0].toUpperCase()}
        </p>
        <p className="text-small opacity-50 font-bold">
          {"$ " + formatPrice(product.price)}
        </p>
      </div>
      <div className="quantity ml-16">
        {" "}
        <div className="flex">
          <button
            className="bg-secondaryLight px-4 py-2 text-secondary group"
            onClick={() => changeQuantity(product, product.quantity - 1)}
          >
            <TextSubtitle
              className="group-hover:text-primary"
              data-testid="decrease"
            >
              -
            </TextSubtitle>
          </button>
          <div className="bg-secondaryLight px-4 py-2">
            <TextSubtitle className="opacity-100" data-testid="quantity">
              {product.quantity}
            </TextSubtitle>
          </div>
          <button
            className="group bg-secondaryLight px-4 py-2 text-secondary"
            onClick={() => changeQuantity(product, product.quantity + 1)}
          >
            <TextSubtitle
              className="group-hover:text-primary"
              data-testid="increase"
            >
              +
            </TextSubtitle>
          </button>
        </div>
      </div>
    </div>
  );
};
