import { Story, Meta } from "@storybook/react";
import { DesktopMenu, MobileMenu } from ".";
import { MobileMenuContext, MobileMenuState } from "../Header";

const initialMobileMenuState: MobileMenuState = {
  isMobileOpen: true,
  triggerMobileMenu: () => console.warn("No active mobile state"),
};

export default {
  title: "Components/Menu",
  component: DesktopMenu,
  argTypes: {},
  subcomponents: { MobileMenu },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <MobileMenuContext.Provider value={initialMobileMenuState}>
        <Story />
      </MobileMenuContext.Provider>
    ),
  ],
} as Meta;

const DesktopMenuTemplate: Story = () => <DesktopMenu />;
const MobileMenuTemplate: Story = (args) => <MobileMenu {...args} />;

export const DesktopMenuComponent = DesktopMenuTemplate.bind({});
export const MobileMenuComponent = MobileMenuTemplate.bind({});
