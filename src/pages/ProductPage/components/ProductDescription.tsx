import { Product } from "../../../api/types/products";
import { TextBody, TextH2 } from "../../../components/Elements/typography";

interface Props {
  product: Product;
}
export const ProducDescription = ({ product }: Props) => {
  return (
    <div className="product-description flex flex-col lg:flex-row just">
      <div className="w-full lg:w-2/3">
        <TextH2>Features</TextH2>
        <TextBody>{product.description}</TextBody>
      </div>
      <div className="w-full mt-16 lg:mt-0 lg:w-1/3">
        <TextH2>In the box</TextH2>
        {product.includes &&
          product.includes.map((include, key) => (
            <div className="include flex mt-4" key={key}>
              <TextBody className="text-primary font-bold opacity-100">
                {include.quantity}x
              </TextBody>
              <p className="ml-4 opacity-100 text-secondary">{include.item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
