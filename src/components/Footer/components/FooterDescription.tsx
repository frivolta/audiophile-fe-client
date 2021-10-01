import Logo from "../../../assets/shared/desktop/logo.svg";
import { TextBody } from "../../Elements/typography";
import { DesktopMenu } from "../../Menu";
import { SocialList } from "../../Social";

export const FooterDescription = () => {
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
        <div className="mt-8 sm:mt-0 lg:hidden flex">{<SocialList />}</div>
      </div>
    </div>
  );
};
