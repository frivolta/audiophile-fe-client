import BgImageSection from "../../assets/home/desktop/image-speaker-zx9.png";
import EarphonesMobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import BgImageSectionSmall from "../../assets/home/desktop/image-speaker-zx7.jpg";
import PatternCircles from "../../assets/home/desktop/pattern-circles.svg";
import { Button, SecondaryButton } from "../Elements/buttons";
import { TextDisplay, TextH5, TextHeroBody } from "../Elements/typography";

export const PreviewSection = () => {
  return (
    <div className="hidden sm:flex container relative  mx-auto bg-primary rounded-md">
      <div className="col-left w-1/2">
        <div className="flex flex-col justify-center items-center overflow-y-hidden">
          <img src={PatternCircles} className="absolute z-0 -top-8" />
          <img src={BgImageSection} className="w-80 -mb-2 mt-28 z-10" />
        </div>
      </div>
      <div className="col-left w-1/2 flex flex-col justify-center pl-14">
        <TextDisplay className="text-left">
          ZX9
          <br />
          SPEAKER
        </TextDisplay>
        <TextHeroBody className="text-left">
          Upgrade to premium speakers that are
          <br />
          phenomenally built to deliver truly remarkable sound.
        </TextHeroBody>
        <div className="mt-8">
          <Button $alt>See product</Button>
        </div>
      </div>
    </div>
  );
};

export const PreviewSectionSmall = () => {
  return (
    <div className="hidden sm:flex container relative my-8 bg-previewSectionSmall bg-no-repeat bg-bottom bg-cover mx-auto rounded-md">
      <div className="flex flex-col justify-center px-24 py-24">
        <TextH5>ZX7 SPEAKER</TextH5>
        <div>
          <SecondaryButton>See product</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export const PreviewSectionDivided = () => {
  return (
    <div className="container relative my-8 gap-8 bg-cover mx-auto flex  flex-col sm:grid sm:grid-flow-row sm:grid-cols-2">
      <div className="mx-8 sm:mx-0 hidden sm:block bg-previewSectionTablet bg-cover lg:bg-previewSectionDivided h-full rounded-md"></div>
      <img src={EarphonesMobile} className="rounded-md mx-8 sm:hidden" />
      <div className="mx-8 sm:mx-0 bg-secondaryLight rounded-md flex flex-col justify-center py-8 px-8 sm:py-16 sm:px-12 lg:py-20 lg:px-24">
        <TextH5>YX1 EARPHONES</TextH5>
        <div>
          <SecondaryButton>See product</SecondaryButton>
        </div>
      </div>
    </div>
  );
};
