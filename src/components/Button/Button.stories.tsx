import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps, ButtonType } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = ButtonTemplate.bind({});
Primary.args = { text: "Primary button" };

export const Alt = ButtonTemplate.bind({});
Alt.args = { text: "Alt button", buttonType: ButtonType.alt };

export const AltOutline = ButtonTemplate.bind({});
AltOutline.args = { text: "Alt button", buttonType: ButtonType.altOutline };

export const Inline = ButtonTemplate.bind({});
Inline.args = { text: "Inline button", buttonType: ButtonType.inline };
