import tw from "tailwind-styled-components";
import { TextSubtitle } from "../Elements/typography";
import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
import React from "react";

type ButtonStyleProps = {
  $alt?: boolean;
};

const ButtonStyle = tw.button<ButtonStyleProps>`
${({ $alt }) => ($alt ? "bg-black" : "bg-primary")}
${({ $alt }) =>
  $alt
    ? "hover:bg-transparent border border-black hover:text-black"
    : "hover:bg-primaryLight"}
text-white
 uppercase
 text-button
 font-bold
 my-6 py-4 px-8
 
 focus:outline-none focus:shadow-outline transform
 hover:scale-105 transition duration-300 ease-in-out`;

const OutlineButtonStyle = tw.button`
bg-transparent
text-black
border
border-black
 uppercase
 text-button
 font-bold
 my-6 py-4 px-8
 focus:outline-none focus:shadow-outline transform
 hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out`;

export enum ButtonType {
  standard = "standard",
  alt = "alt",
  altOutline = "altOutline",
  inline = "inline",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  buttonType?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  buttonType = ButtonType.standard,
  ...args
}) => {
  if (buttonType === ButtonType.alt) {
    return (
      <ButtonStyle onClick={onClick} {...args} $alt>
        {text}
      </ButtonStyle>
    );
  }
  if (buttonType === ButtonType.altOutline) {
    return (
      <OutlineButtonStyle onClick={onClick} {...args}>
        {text}
      </OutlineButtonStyle>
    );
  }

  if (buttonType === ButtonType.inline) {
    return (
      <button
        className="text button my-2.5 flex justify-center items-center group"
        onClick={onClick}
        {...args}
      >
        <TextSubtitle className="mt-0.5 group-hover:text-primary group-hover:opacity-100 transition duration-300 ease-in-out">
          {text}
        </TextSubtitle>
        <img src={IconArrowRight} alt="arrow right" className="ml-2" />
      </button>
    );
  }

  return (
    <ButtonStyle onClick={onClick} {...args}>
      {text}
    </ButtonStyle>
  );
};

export interface InlineButtonProps {
  handleClick: () => void;
  text: string;
}
