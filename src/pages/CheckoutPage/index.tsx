import { useContext } from "react";
import { Link } from "react-router-dom";
import { TextBody, TextH3, TextH6 } from "../../components/Elements/typography";
import { Footer } from "../../components/Footer";
import { CartContext } from "../../hooks/useCart/useCart";
import { formatPrice } from "../../utils";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { SummaryProduct } from "./components/SummaryProduct";
import { SummarySummary } from "./components/SummarySummary";

export const CheckoutPage = () => {
  const { products, setProducts: setProductToCart, total } = useContext(
    CartContext
  );
  const SHIPPING = 50;
  const VAT = (total * 20) / 100;
  return (
    <div className="bg-secondaryLight">
      <CheckoutHeader />
      <div className="body py-16 px-8 sm:px-0 container mx-auto">
        <Link to="/" className="text-secondary">
          Go back
        </Link>
      </div>
      <div className="checkout-container flex container mx-auto mb-24">
        <div className="w-2/3 bg-white mr-8 rounded-md">left</div>
        <div className="w-1/3 bg-white ml-8 py-8 px-6 rounded-md">
          <div className="title">
            <TextH3>Summary</TextH3>
          </div>
          {products &&
            Object.values(products).map((product) => (
              <SummaryProduct product={product} />
            ))}
          <div className="summary-total flex flex-col mt-8">
            <SummarySummary total={total} vat={VAT} shipping={SHIPPING} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
