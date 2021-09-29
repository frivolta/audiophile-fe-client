import { Hero } from "./components/Hero";
import {
  TextDisplay,
  TextHeroBody,
  TextOverline,
} from "./components/Elements/typography";
import { Button } from "./components/Elements/buttons";
import { Header } from "./components/Header";

function App() {
  return (
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
  );
}

export default App;
