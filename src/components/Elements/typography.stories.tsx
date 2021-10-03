import { Story, Meta } from "@storybook/react";
import {
  TextBody,
  TextBodyExtraLight,
  TextDisplay,
  TextH2,
  TextH4,
  TextH5,
  TextH6,
  TextOverline,
  TextSubtitle,
} from "./typography";

export default {
  title: "Elements/Typography",
} as Meta;

const TBody: Story<typeof TextBody> = (args) => (
  <>
    <TextDisplay>Text Display</TextDisplay>
    <TextOverline>Text Overline</TextOverline>
    <TextH6>Text H6</TextH6>
    <TextH5>Text H5</TextH5>
    <TextH4>Text H4</TextH4>
    <TextH2>Text H2</TextH2>
    <TextBody>Text body</TextBody>
    <TextSubtitle>Text subtitle</TextSubtitle>
    <TextBodyExtraLight>Text body extralight</TextBodyExtraLight>
  </>
);

export const TextElements = TBody.bind({});

TextElements.args = {};
