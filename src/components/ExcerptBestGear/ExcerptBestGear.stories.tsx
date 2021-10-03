import { Story, Meta } from "@storybook/react";
import { ExcerptBestGear } from ".";

export default {
  title: "Section/ExcerptBestGear",
  component: ExcerptBestGear,
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

const ExcerptBestGearTemplate: Story = () => <ExcerptBestGear />;

export const ExcerptBestGearComponent = ExcerptBestGearTemplate.bind({});
