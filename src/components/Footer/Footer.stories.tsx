import { Story, Meta } from "@storybook/react";
import { Footer } from ".";

export default {
  title: "Section/Footer",
  component: Footer,
  argTypes: {
    linkPath: { action: "clicked" },
  },
  parameters: {
    backgrounds: { default: "lighter" },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col mt-24">
        <Story />
      </div>
    ),
  ],
} as Meta;

const FooterTemplate: Story = () => <Footer />;

export const ExcerptBestGearComponent = FooterTemplate.bind({});
