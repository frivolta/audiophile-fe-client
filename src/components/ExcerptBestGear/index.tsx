import ImageBestGear from "../../assets/shared/desktop/image-best-gear.jpg";
import ImageBestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import ImageBestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import { TextBody, TextH2 } from "../Elements/typography";

export const ExcerptBestGear = () => {
  return (
    <div className="px-8 overflow-hidden sm:px-0 pexcerpt flex flex-col-reverse lg:flex-row container mx-auto my-24 lg:my-48">
      <div className="excerpt__text w-full lg:w-1/2 overflow-hidden text-center lg:text-left flex flex-col justify-center pr-0 lg:pr-20">
        <TextH2>
          Bringing you the <span className="text-primary">best</span> audio gear
        </TextH2>
        <TextBody className="mt-8">
          Located at the heart of New York City, Audiophile is the premier store
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </TextBody>
      </div>
      <div className="experpt__image w-full lg:w-1/2 overflow-hidden">
        <img
          src={ImageBestGearMobile}
          alt="providing best gear"
          className="rounded-md block sm:hidden mb-12"
        />
        <img
          src={ImageBestGearTablet}
          alt="providing best gear"
          className="rounded-md hidden sm:block lg:hidden mb-12"
        />
        <img
          src={ImageBestGear}
          alt="providing best gear"
          className="rounded-md hidden lg:block"
        />
      </div>
    </div>
  );
};
