import BgImageSection from "../../../../assets/home/desktop/image-speaker-zx9.png";
import EarphonesMobile from "../../../../assets/home/mobile/image-earphones-yx1.jpg";
import PatternCircles from "../../../../assets/home/desktop/pattern-circles.svg";
import { Button, ButtonType } from "../../../../components/Button";
import {
  TextDisplay,
  TextH5,
  TextHeroBody,
} from "../../../../components/Elements/typography";

export const PreviewSection = () => {
  return (
    <div className="mx-8 sm:mx-auto" data-testid="preview-section">
      <div className="sm:mx-auto sm:flex container relative  mx-auto bg-primary rounded-md">
        <div className="col-left lg:w-1/2">
          <div className="flex flex-col justify-center items-center overflow-y-hidden">
            <img
              src={PatternCircles}
              className="absolute lg:z-0 lg:-top-8"
              alt="pattern"
            />
            <img
              src={BgImageSection}
              className="w-40 sm:w-40 lg:w-80 -mb-2 mt-12 lg:mt-28 z-10"
              alt="zx9 speaker"
            />
          </div>
        </div>
        <div className="col-left lg:w-1/2 flex flex-col justify-center lg:pl-14">
          <TextDisplay className="text-center mt-16 lg:mt-0 lg:text-left">
            ZX9
            <br />
            SPEAKER
          </TextDisplay>
          <TextHeroBody className="px-12 lg:px-0 text-center lg:text-left">
            Upgrade to premium speakers that are
            <br />
            phenomenally built to deliver truly remarkable sound.
          </TextHeroBody>
          <div className="text-center lg:text-left mt-4 mb-8 lg:mb-0 lg:mt-8">
            <Button
              buttonType={ButtonType.alt}
              text="See product"
              onClick={() => console.log("void")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PreviewSectionSmall = () => {
  return (
    <div className="mx-8 sm:mx-auto" data-testid="preview-section-small">
      <div className="mx-auto flex container relative my-8 bg-previewSectionSmallMobile sm:bg-previewSectionSmallTablet lg:bg-previewSectionSmall bg-no-repeat bg-bottom bg-cover rounded-md">
        <div className="flex flex-col justify-center px-12 py-24  sm:px-12 sm:py-24 lg:px-24 lg:py-24">
          <TextH5>ZX7 SPEAKER</TextH5>
          <div>
            <Button
              buttonType={ButtonType.altOutline}
              text="See product"
              onClick={() => console.log("void")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PreviewSectionDivided = () => {
  return (
    <div
      className="container relative my-8 gap-8 bg-cover mx-auto flex  flex-col sm:grid sm:grid-flow-row sm:grid-cols-2"
      data-testid="preview-section-divided"
    >
      <div className="mx-8 sm:mx-0 hidden sm:block bg-previewSectionTablet bg-cover lg:bg-previewSectionDivided h-full rounded-md"></div>
      <img
        src={EarphonesMobile}
        className="rounded-md mx-8 sm:hidden"
        alt="earphones"
      />
      <div className="mx-8 sm:mx-0 bg-secondaryLight rounded-md flex flex-col justify-center py-8 px-8 sm:py-16 sm:px-12 lg:py-20 lg:px-24">
        <TextH5>YX1 EARPHONES</TextH5>
        <div>
          <Button
            buttonType={ButtonType.altOutline}
            text="See product"
            onClick={() => console.log("void")}
          />
        </div>
      </div>
    </div>
  );
};
