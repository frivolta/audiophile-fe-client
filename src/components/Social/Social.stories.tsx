import { Story, Meta } from "@storybook/react";
import { SocialList } from ".";

export default {
  title: "Components/Social",
  component: SocialList,
  argTypes: {},
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="flex">
        <Story />
      </div>
    ),
  ],
} as Meta;

const SocialListTemplate: Story = () => <SocialList />;

export const SocialListComponent = SocialListTemplate.bind({});
