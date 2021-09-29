import tw from "tailwind-styled-components";

export const HeroWrapper = tw.div`
flex justify-around mx-auto md:flex-row items-center xl:bg-hero-image-desktop bg-hero-image-mobile
bg-center bg-no-repeat bg-cover lg:text-left text-center
`;

export const HeroText = tw.div`
container pb-40 pt-64
`;

export const HeroCol = tw.div`
flex flex-col items-center w-full xl:w-3/7 xl:items-start`;
