import { InlineButton } from "../Elements/buttons";
import { TextH6 } from "../Elements/typography";
import {
  CategoryItemContainer,
  CategoryItemImage,
  CategoryItemWrapper,
} from "./style";

interface CategoryItemProps {
  thumbnail: string;
  title: string;
  linkPath: string;
  marginAdjustment?: number;
}
export const CategoryItem: React.FC<CategoryItemProps> = ({
  thumbnail,
  title,
  linkPath,
  marginAdjustment,
}) => {
  const handleClickAction = () => {
    console.log(`going to: ${linkPath}`);
  };

  return (
    <CategoryItemWrapper>
      <CategoryItemContainer>
        <CategoryItemImage
          src={thumbnail}
          alt={title}
          className={`${marginAdjustment ? `m-${marginAdjustment}` : ""}`}
        />
        <TextH6 className="-mt-6">{title}</TextH6>
        <InlineButton handleClick={handleClickAction} text="SHOP" />
      </CategoryItemContainer>
    </CategoryItemWrapper>
  );
};
