export interface Category {
  category: "string";
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
export type GetCategoriesApi = Category[];
