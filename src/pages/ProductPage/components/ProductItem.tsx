import { useContext } from "react";
import { Product } from "../../../api/types/products";
import {
  TextBody,
  TextH2,
  TextH6,
  TextOverline,
} from "../../../components/Elements/typography";
import { QuantityForm } from "../../../components/QuantityForm";
import { CartContext } from "../../../hooks/useCart";
import { formatPrice } from "../../../utils";

export interface ProductProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductProps) => {
  const { products, setProducts: setProductToCart } = useContext(CartContext);

  // Has side effects
  const handleAddToCart = (qty: number) => {
    const { id } = product;
    if (products.hasOwnProperty(id)) {
      const updatedProducts = {
        ...products,
        [id]: { ...products[id], quantity: qty },
      };
      setProductToCart({ ...updatedProducts });
    } else {
      setProductToCart({ ...products, [id]: { ...product, quantity: qty } });
    }
  };

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
          <TextH6 className="mt-6 mb-6">$ {formatPrice(product.price)}</TextH6>
          <QuantityForm handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};
