import { TextBody } from "../Elements/typography";
import { DesktopMenu } from "../Menu";

import Logo from "../../assets/shared/desktop/logo.svg";
import IconFb from "../../assets/shared/desktop/icon-facebook.svg";
import IconIg from "../../assets/shared/desktop/icon-instagram.svg";
import IconTw from "../../assets/shared/desktop/icon-twitter.svg";

const FooterDescription = () => {
  return (
    <div className="flex flex-col">
      <div className="logo flex justify-center items-center sm:justify-start pb-0 sm:pb-0">
        <img src={Logo} alt="audiophile logo" />
      </div>
      <div className="flex justify-center sm:justify-start sm:flex lg:hidden mt-8">
        <DesktopMenu />
      </div>
      <div className="description mt-12 sm:mt-8 lg:mt-12">
        <TextBody>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </TextBody>
      </div>
      <div className="copy mt-14 flex flex-col items-center sm:flex-row sm:flex sm:justify-between">
        <TextBody className="font-bold">
          Copyright 2021. All Rights Reserved
        </TextBody>
        <div className="mt-8 sm:mt-0 lg:hidden flex">
          <SocialList />
        </div>
      </div>
    </div>
  );
};

interface SocialItemProps {
  link: string;
  img: string;
  alt: string;
  cn?: string;
}
const SocialItem = ({ link, img, alt, cn }: SocialItemProps) => {
  return (
    <a href={link} className={cn ? cn : ""}>
      <img src={img} alt={alt} />
    </a>
  );
};

const SocialList = () => (
  <>
    <SocialItem link="/facebook" img={IconFb} alt="icon facebook" cn="mr-4" />
    <SocialItem link="/instagram" img={IconIg} alt="icon instagram" cn="mr-4" />
    <SocialItem link="/twitter" img={IconTw} alt="icon twitter" />
  </>
);

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-8 sm:px-0 text-center sm:text-left">
      <div className="relative container mx-auto">
        <div className="colored-line absolute hidden lg:block top-0 left-0 w-24 h-1 bg-primary"></div>
        <div className="colored-line flex sm:hidden mx-auto w-24 h-1 bg-primary"></div>
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
