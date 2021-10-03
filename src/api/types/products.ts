export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductOther {
  slug: string;
  name: string;
  image: Image;
}
export interface Product {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
  others: ProductOther[];
}
