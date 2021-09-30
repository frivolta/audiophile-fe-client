import BgImageSection from "../../assets/home/desktop/image-speaker-zx9.png";
import BgImageSectionSmall from "../../assets/home/desktop/image-speaker-zx7.jpg";
import PatternCircles from "../../assets/home/desktop/pattern-circles.svg";
import { Button, SecondaryButton } from "../Elements/buttons";
import { TextDisplay, TextH5, TextHeroBody } from "../Elements/typography";

export const PreviewSection = () => {
  return (
    <div className="container relative flex mx-auto bg-primary rounded-md">
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
    <div className="container relative my-8 flex bg-previewSectionSmall bg-no-repeat bg-bottom bg-cover mx-auto rounded-md">
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
    <div className="container relative my-8 gap-8 bg-cover mx-auto grid grid-flow-row grid-cols-2">
      <div className="bg-previewSectionDivided h-full rounded-md"></div>
      <div className="bg-secondaryLight rounded-md flex flex-col justify-center py-20 px-24">
        <TextH5>ZX7 SPEAKER</TextH5>
        <div>
          <SecondaryButton>See product</SecondaryButton>
        </div>
      </div>
    </div>
  );
};
