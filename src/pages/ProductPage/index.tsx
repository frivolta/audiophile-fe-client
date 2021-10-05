import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../api/products";
import { Product } from "../../api/types/products";
import { CategoryList } from "../../components/CategoryList";
import { ExcerptBestGear } from "../../components/ExcerptBestGear";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ProductItem } from "./components/ProductItem";
import { ProductHeader } from "./components/ProductHeader";
import { ProducDescription } from "./components/ProductDescription";

interface Params {
  slug: string;
}

export const ProductPage = () => {
  const isCancelled = useRef(false);
  const [product, setProduct] = useState<Product>();
  const { slug } = useParams<Params>();

  const fetchApi = useCallback(async () => {
    const product = await getProductBySlug(
      "http://localhost:4000/products",
      slug
    );
    if (product && !isCancelled.current) {
      setProduct(product);
    }
  }, []);
  useEffect(() => {
    fetchApi();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div>
      <ProductHeader />
      <div className="body py-16 px-8 sm:px-0 container mx-auto">
        <Link to="/" className="text-secondary">
          Go back
        </Link>
        {product && (
          <div>
            <ProductItem product={product} />
            <ProducDescription product={product} />
          </div>
        )}
        <CategoryList />
        <ExcerptBestGear />
      </div>
      <Footer />
    </div>
  );
};
