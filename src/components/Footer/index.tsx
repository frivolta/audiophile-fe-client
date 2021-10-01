import tw from "tailwind-styled-components";
import { DesktopMenu } from "../Menu";
import { SocialList } from "../Social";

import { FooterDescription } from "./components";

const ColouredLineDesktop = tw.div`colored-line absolute hidden lg:block top-0 left-0 w-24 h-1 bg-primary`;
const ColouredLineMobile = tw.div`colored-line flex sm:hidden mx-auto w-24 h-1 bg-primary`;

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-8 sm:px-0 text-center sm:text-left">
      <div className="relative container mx-auto">
        <ColouredLineDesktop />
        <ColouredLineMobile />
      </div>
      <div className="container mx-auto pt-12 sm:pt-20 pb-12 flex">
        <div className="lg:w-1/2">
          <FooterDescription />
        </div>
        <div className="lg:w-1/2 hidden lg:flex flex-col items-end">
          <div className="footer-menu-social">
            <DesktopMenu />
            <div className="mt-24">
              <div className="flex justify-end">
                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
