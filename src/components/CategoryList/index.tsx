import { CategoryItem } from "../CategoryItem";
import { CategoriesWrapper } from "../CategoryItem/style";
import CatHeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import CatSpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CatEarphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export const CategoryList = () => {
  return (
    <CategoriesWrapper data-testid="categories">
      <CategoryItem
        title="Headphones"
        linkPath="/category/headphones"
        thumbnail={CatHeadphonesImg}
      />
      <CategoryItem
        title="Speakers"
        linkPath="/category/speakers"
        thumbnail={CatSpeakersImg}
        marginAdjustment={1.5}
      />
      <CategoryItem
        title="Earphones"
        linkPath="/category/earphones"
        thumbnail={CatEarphonesImg}
        marginAdjustment={4}
      />
    </CategoriesWrapper>
  );
};
