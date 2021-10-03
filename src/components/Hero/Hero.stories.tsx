import { Story, Meta } from "@storybook/react";
import { Children } from "react";
import { Hero, HeroProps } from ".";
import { Button } from "../Button";
import {
  TextDisplay,
  TextHeroBody,
  TextOverline,
} from "../Elements/typography";
import { Header } from "../Header";

export default {
  title: "Section/Hero",
  component: Hero,
  argTypes: {},
  parameters: {
    backgrounds: { default: "lighter" },
  },
} as Meta;

const HeroStdChild = () => (
  <>
    <TextOverline $alt>New Product</TextOverline>
    <TextDisplay>XX99 Mark II Headphones</TextDisplay>
    <TextHeroBody>
      Experience natural, lifelike audio and exceptional
      <br />
      build quality made for the passionate music
      <br />
      enthusiast.
    </TextHeroBody>

    <Button text="SUBSCRIBE" onClick={() => console.log("void")} />
  </>
);

const HeroTemplate: Story<HeroProps> = ({ children, header }) => (
  <Hero header={header}>{children}</Hero>
);

export const HeroComponent = HeroTemplate.bind({});
HeroComponent.args = {
  children: <HeroStdChild />,
  header: Header,
};
