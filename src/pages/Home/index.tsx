import { CartBgOverlay } from "../../components/Cart/styles";
import { CategoryItem } from "../../components/CategoryItem";
import { CategoriesWrapper } from "../../components/CategoryItem/style";
import { Button } from "../../components/Button";
import {
  TextDisplay,
  TextHeroBody,
  TextOverline,
} from "../../components/Elements/typography";
import { ExcerptBestGear } from "../../components/ExcerptBestGear";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import {
  PreviewSection,
  PreviewSectionDivided,
  PreviewSectionSmall,
} from "./components/PreviewSection";

import CatHeadphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import CatSpeakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CatEarphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

export const Home = () => {
  return (
    <>
      <CartBgOverlay $isActive={false} />
      <Hero header={Header}>
        <TextOverline $alt>New Product</TextOverline>
        <TextDisplay>XX99 Mark II Headphones</TextDisplay>
        <TextHeroBody>
          Experience natural, lifelike audio and exceptional
          <br />
          build quality made for the passionate music
          <br />
          enthusiast.
        </TextHeroBody>

        <Button text="SUBSCRIBE" onClick={() => console.log("void")} />
      </Hero>
      <CategoriesWrapper>
        <CategoryItem
          title="Headphones"
          linkPath="/category/headphones"
          thumbnail={CatHeadphonesImg}
        />
        <CategoryItem
          title="Speakers"
          linkPath="/category/speakers"
          thumbnail={CatSpeakersImg}
          marginAdjustment={1.5}
        />
        <CategoryItem
          title="Earphones"
          linkPath="/category/earphones"
          thumbnail={CatEarphonesImg}
          marginAdjustment={4}
        />
      </CategoriesWrapper>
      <PreviewSection />
      <PreviewSectionSmall />
      <PreviewSectionDivided />
      <ExcerptBestGear />
      <Footer />
    </>
  );
};
