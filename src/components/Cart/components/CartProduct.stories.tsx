import { Story, Meta } from "@storybook/react";
import { product } from "../../../db.product";
import { CartProduct, CartProductProps } from "./CartProduct";

export default {
  title: "Components/Cart Product",
  component: CartProduct,
  argTypes: {
    changeQuantity: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col max-w-1/2 items-center">
        <Story />
      </div>
    ),
  ],
} as Meta;

export const CartTemplate: Story<CartProductProps> = (args) => (
  <CartProduct {...args} />
);

export const CartProductComponent = CartTemplate.bind({});

CartProductComponent.args = {
  product: { ...product, quantity: 1 },
};
