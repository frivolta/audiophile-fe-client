import tw from "tailwind-styled-components";

type TextOverlineProps = {
  $alt?: boolean;
};
export const TextOverline = tw.div<TextOverlineProps>`
  ${(p) => (p.$alt ? `text-white` : `text-primary`)}
  text-sm tracking-overline overline uppercase opacity-50`;

export const TextDisplay = tw.h1`my-4 text-display text-white font-bold uppercase`;
export const TextH6 = tw.div`text-h6 uppercase font-bold `;

// Hero
export const TextHeroBody = tw.p`text-white text-heroBody font-extralight opacity-75`;

export const TextSubtitle = tw.p`text-black font-bold text-subtitle  opacity-50`;
