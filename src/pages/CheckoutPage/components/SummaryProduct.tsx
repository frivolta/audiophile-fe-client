import { TextBody } from "../../../components/Elements/typography";
import { ProductWithQty } from "../../../hooks/useCart/useCart";
import { formatPrice } from "../../../utils";

interface SummaryProductProps {
  product: ProductWithQty;
}
export const SummaryProduct = ({ product }: SummaryProductProps) => {
  return (
    <div
      className="product flex  my-6 justify-between items-center"
      key={product.id}
    >
      <div className="flex items-center">
        <div className="image w-16">
          <img
            src={product.image.mobile}
            alt={product.name}
            className="rounded-md"
          />
        </div>
        <div className="product-description flex-col ml-4 my-4 w-max">
          <p className="text-p font-bold">
            {product.slug.split("-")[0].toUpperCase()}
          </p>
          <p className="text-small opacity-50 font-bold">
            {"$ " + formatPrice(product.price)}
          </p>
        </div>
      </div>
      <div className="quantity">
        <TextBody className="font-bold">x{product.quantity}</TextBody>
      </div>
    </div>
  );
};
