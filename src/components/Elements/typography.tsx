import tw from "tailwind-styled-components";

type TextOverlineProps = {
  $alt?: boolean;
};
export const TextOverline = tw.div<TextOverlineProps>`
  ${(p) => (p.$alt ? `text-white` : `text-primary`)}
  text-sm tracking-overline overline uppercase opacity-50`;

export const TextDisplay = tw.h1`my-4 text-display text-white font-bold uppercase`;
export const TextH6 = tw.h6`text-h6 uppercase font-bold `;
export const TextH5 = tw.h5`text-h5 uppercase font-bold `;
export const TextH4 = tw.h4`text-h4 uppercase font-bold `;
export const TextH2 = tw.h2`text-h2 uppercase font-bold`;
export const TextBody = tw.p`text-p font-extralight opacity-50`;

// Hero
export const TextHeroBody = tw.p`text-white text-heroBody font-extralight opacity-75`;

export const TextSubtitle = tw.p`text-black font-bold text-subtitle  opacity-50`;
export const TextBodyExtraLight = tw.p`text-black font-extraLight text-subtitle  opacity-50`;
