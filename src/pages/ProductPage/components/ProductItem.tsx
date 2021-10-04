import { Product } from "../../../api/types/products";
import { Button } from "../../../components/Button";
import {
  TextBody,
  TextH2,
  TextH6,
  TextOverline,
} from "../../../components/Elements/typography";

export interface ProductProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductProps) => {
  return (
    <div
      className={`category-item flex py-16 flex-col lg:flex-row`}
      data-testid={product.slug}
    >
      <div className="first-col lg:w-1/2">
        <img
          src={product.categoryImage.desktop}
          alt={product.name}
          className="hidden lg:block"
        />
        <img
          src={product.categoryImage.tablet}
          alt={product.name}
          className="block lg:hidden"
        />
      </div>
      <div className="second-col lg:w-1/2">
        <div className="description flex justify-center items-center lg:items-start text-center lg:text-left mt-16 lg:mt-0 px-16 h-full flex-col">
          {product.new && <TextOverline>NEW PRODUCT</TextOverline>}
          <TextH2>{product.name}</TextH2>
          <TextBody>{product.description}</TextBody>
          <TextH6 className="mt-6 mb-6">$ {product.price}</TextH6>
        </div>
      </div>
    </div>
  );
};
