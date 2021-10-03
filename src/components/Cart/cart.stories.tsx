import { Story, Meta } from "@storybook/react";
import { Cart } from ".";

export default {
  title: "Components/Cart",
  component: Cart,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "black" },
  },
} as Meta;

const CartTemplate: Story<typeof Cart> = () => <Cart />;

export const CartComponent = CartTemplate.bind({});

CartComponent.args = {};
