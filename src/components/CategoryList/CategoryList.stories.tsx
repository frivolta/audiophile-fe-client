import { Story, Meta } from "@storybook/react";
import { CategoryList } from ".";
import CatHeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";

export default {
  title: "Components/CategoryList",
  component: CategoryList,
  argTypes: {
    linkPath: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "lighter" },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col mt-24 ">
        <Story />
      </div>
    ),
  ],
} as Meta;

const CategoryTemplate: Story = (args) => <CategoryList {...args} />;

export const CategoryComponent = CategoryTemplate.bind({});

CategoryComponent.args = {
  title: "Headphones",
  linkPath: "/category/headphones",
  thumbnail: CatHeadphonesImg,
};
