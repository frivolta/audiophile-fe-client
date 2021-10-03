import { Story, Meta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Section/Header",
  component: Header,
  argTypes: {
    linkPath: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
} as Meta;

const HeaderTemplate: Story = () => <Header />;

export const HeaderComponent = HeaderTemplate.bind({});
