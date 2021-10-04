import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getProductByCategory } from "../../api/products";
import { Product } from "../../api/types/products";
import { CategoryList } from "../../components/CategoryList";
import { ExcerptBestGear } from "../../components/ExcerptBestGear";
import { Footer } from "../../components/Footer";
import { CategoryHeader } from "./components/CategoryHeader";
import { ProductItem } from "./components/Product";

interface Params {
  id: string;
}

export const CategoryPage = () => {
  const isCancelled = useRef(false);
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = useParams<Params>();

  const fetchApi = useCallback(async () => {
    const products = await getProductByCategory(
      "http://localhost:4000/products",
      id
    );
    if (products && !isCancelled.current) {
      setProducts(products);
    }
  }, []);
  useEffect(() => {
    fetchApi();
    return () => {
      isCancelled.current = true;
    };
  }, []);
  const isEven = (index: number) => !!(index % 2);
  const handleRedirect = (path: string) => history.push(path);
  return (
    <div>
      <CategoryHeader title={id} />
      <div className="body py-16 px-8 sm:px-0 container mx-auto">
        {products &&
          products.map((product, i) => (
            <ProductItem
              key={product.id}
              isEven={isEven(i)}
              product={product}
              handleRedirect={handleRedirect}
            />
          ))}
        <CategoryList />
        <ExcerptBestGear />
      </div>
      <Footer />
    </div>
  );
};
