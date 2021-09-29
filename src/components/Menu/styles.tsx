import tw from "tailwind-styled-components";

export const MenuNavigationListContainerDesktop = tw.ul`inline-flex text-white uppercase text-subtitle font-bold`;
export const MenuNavigationListItemDesktop = tw.li`px-4`;

type MobileMenuContainerProps = {
  $isHidden: boolean;
};
export const MobileMenuContainer = tw.div<MobileMenuContainerProps>`
${({ $isHidden }) => ($isHidden ? "hidden" : "flex")}
mx-auto fixed bg-secondary bg-opacity-95 top-0 left-0 right-0 bottom-0 min-h-full z-20 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center`;
export const MobileMenuNavigationList = tw.ul`text-white uppercase text-subtitle`;
export const MenuNavigationListItemMobile = tw.li`px-4 py-4`;
export const MobileMenuCloseContainer = tw.div`mobile__close absolute w-4 top-10 left-10`;

type MenuNavigationList = { $isMobile?: boolean };
export const MenuNavigationListLink = tw.a<MenuNavigationList>`
${(p) => (p.$isMobile ? "text-mobileMenu" : "")}
hover:text-primary
duration-300
ease-in-out`;
