import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    linkPath: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderComponent = HeaderTemplate.bind({});
HeaderComponent.args = {};
