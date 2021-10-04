import { Product } from "../../../api/types/products";
import { Button } from "../../../components/Button";
import {
  TextBody,
  TextH2,
  TextOverline,
} from "../../../components/Elements/typography";

export interface ProductProps {
  product: Product;
  isEven: boolean;
  handleRedirect: (path: string) => void;
}

export const ProductItem = ({
  product,
  isEven,
  handleRedirect,
}: ProductProps) => {
  return (
    <div
      className={`category-item flex py-16 flex-col ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
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
          <div>
            <Button
              text="SEE PRODUCT"
              onClick={() => handleRedirect(`/products/${product.slug}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
