import React from "react";
import { HeroCol, HeroText, HeroWrapper } from "./styles";

export interface HeroProps {
  children: React.ReactChild | React.ReactChild[];
  header?: React.FC<{}>;
}

export const Hero: React.FC<HeroProps> = ({ children, header }) => {
  return (
    <HeroWrapper data-testid="hero">
      {header && React.createElement(header)}
      <HeroText>
        <HeroCol>{children}</HeroCol>
      </HeroText>
    </HeroWrapper>
  );
};
