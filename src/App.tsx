import { Hero } from "./components/Hero";
import {
  TextDisplay,
  TextHeroBody,
  TextOverline,
} from "./components/Elements/typography";
import { Button } from "./components/Elements/buttons";
import { Header } from "./components/Header";
import React from "react";
import { CartBgOverlay } from "./components/Cart/styles";

import CatHeadphonesImg from "./assets/shared/desktop/image-category-thumbnail-headphones.png";
import CatSpeakersImg from "./assets/shared/desktop/image-category-thumbnail-speakers.png";
import CatEarphonesImg from "./assets/shared/desktop/image-category-thumbnail-earphones.png";
import { CategoryItem } from "./components/CategoriesList";
import { CategoriesWrapper } from "./components/CategoriesList/style";
import {
  PreviewSection,
  PreviewSectionDivided,
  PreviewSectionSmall,
} from "./components/PreviewSection";
import { ExcerptBestGear } from "./components/ExcerptBestGear";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
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

        <Button>Subscribe</Button>
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
    </React.Fragment>
  );
}

export default App;
