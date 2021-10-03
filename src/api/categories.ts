import axios from "axios";

export interface Category {
  category: "string";
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
export type GetCategoriesApi = Category[];

export async function getCategory(url: string, categoryId: string) {
  try {
    const { data } = await axios.get<GetCategoriesApi>(url);
    const filteredData = await data.filter(
      (category) => category.category === categoryId
    );
    return filteredData;
  } catch (err) {
    console.error("[err]>>", err);
  }
}
