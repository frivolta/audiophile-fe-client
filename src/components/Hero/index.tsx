import React from "react";
import { HeroCol, HeroText, HeroWrapper } from "./styles";

interface Props {
  children: React.ReactChild | React.ReactChild[];
  header?: React.FC<{}>;
}

export const Hero: React.FC<Props> = ({ children, header }) => {
  return (
    <HeroWrapper>
      {header && React.createElement(header)}
      <HeroText>
        <HeroCol>{children}</HeroCol>
      </HeroText>
    </HeroWrapper>
  );
};
