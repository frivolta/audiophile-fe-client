import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category, getCategory } from "../../api/categories";
import { getProductByCategory } from "../../api/products";
import { Product } from "../../api/types/products";

interface Params {
  id: string;
}

export const CategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const { id } = useParams<Params>();

  useEffect(() => {
    const fetchApi = async function () {
      const categories = await getCategory(
        "http://localhost:4000/categories",
        id
      );
      const products = await getProductByCategory(
        "http://localhost:4000/products",
        id
      );
      if (categories) {
        setCategories(categories);
      }
      if (products) {
        setProducts(products);
      }
    };
    fetchApi();
  }, []);

  console.log(categories, products);
  return <div className=""></div>;
};
