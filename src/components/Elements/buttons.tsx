import tw from "tailwind-styled-components";
import { TextSubtitle } from "./typography";
import IconArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

export const Button = tw.button`bg-primary text-white uppercase text-button font-bold
  my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform
  transition hover:scale-105 hover:bg-primaryLight duration-300 ease-in-out`;

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
