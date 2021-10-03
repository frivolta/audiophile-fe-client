import axios from "axios";
import { Product } from "./types/products";

export type GetProductsApi = Product[];

export async function getProductByCategory(url: string, categoryId: string) {
  try {
    const { data } = await axios.get<GetProductsApi>(url);
    const filteredData = await data.filter(
      (product) => product.category === categoryId
    );
    return filteredData;
  } catch (err) {
    console.error("[err]>>", err);
  }
}
