import tw from "tailwind-styled-components";
import { TextSubtitle } from "./typography";
import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

type ButtonProps = {
  $alt?: boolean;
};

export const Button = tw.button<ButtonProps>`
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

export const SecondaryButton = tw.button`
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

interface InlineButtonProps {
  handleClick: () => void;
  text: string;
}

export const InlineButton: React.FC<InlineButtonProps> = ({
  handleClick,
  text,
}) => {
  return (
    <button
      className="text button my-2.5 flex justify-center items-center group"
      onClick={handleClick}
    >
      <TextSubtitle className="mt-0.5 group-hover:text-primary group-hover:opacity-100 transition duration-300 ease-in-out">
        {text}
      </TextSubtitle>
      <img src={IconArrowRight} alt="arrow right" className="ml-2" />
    </button>
  );
};
