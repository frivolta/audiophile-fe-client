import tw from "tailwind-styled-components";
export type HeaderWrapperProps = {
  $fixed?: boolean;
};
export const HeaderWrapper = tw.div<HeaderWrapperProps>`${({ $fixed }) =>
  $fixed
    ? "relative bg-black"
    : "absolute"} top-0 left-0 right-0 w-full bg-transparent`;
export const HeaderGridContainer = tw.div`container mx-auto h-24 items-center grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-3 border-b border-opacity-20`;
export const HeaderColLeft = tw.div`logo col-span-1 flex justify-start items-center`;
export const HamburgerWrapper = tw.div`hamburger xl:hidden col-span-1 pr-8 pl-8 sm:pl-0`;
export const HeaderCenterColMobile = tw.div`logo-mobile sm:hidden`;
export const HeaderCenterColDesktop = tw.div`menu col-span-2 hidden justify-center xl:flex`;
export const HeaderRightCol = tw.div`cart col-span-1 flex justify-end pr-8 sm:pr-0`;
