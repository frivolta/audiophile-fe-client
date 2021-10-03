import { Story, Meta } from "@storybook/react";
import { CategoryItem, CategoryItemProps } from ".";
import CatHeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";

export default {
  title: "Components/Category",
  component: CategoryItem,
  argTypes: {
    linkPath: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "lighter" },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col mt-24 max-w-1/2">
        <Story />
      </div>
    ),
  ],
} as Meta;

const CategoryTemplate: Story<CategoryItemProps> = (args) => (
  <CategoryItem {...args} />
);

export const CategoryComponent = CategoryTemplate.bind({});

CategoryComponent.args = {
  title: "Headphones",
  linkPath: "/category/headphones",
  thumbnail: CatHeadphonesImg,
};
