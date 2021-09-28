import tw from "tailwind-styled-components";

const Hero = tw.div`
flex justify-around mx-auto md:flex-row items-center bg-hero-image-desktop
bg-center bg-no-repeat
`;

const HeroText = tw.div`
container py-40
`;

const HeroCol = tw.div`
flex flex-col w-3/7 items-start`;

type TextOverlineProps = {
  $alt?: boolean;
};
const TextOverline = tw.div<TextOverlineProps>`
${(p) => (p.$alt ? `text-white` : `text-primary`)}
text-sm tracking-overline overline uppercase`;

const TextDisplay = tw.h1`my-4 text-display text-white font-bold uppercase`;
const TextHeroBody = tw.p`text-white text-heroBody font-extralight pr-8`;
const Button = tw.button`bg-primary text-white uppercase text-button font-bold
my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform
transition hover:scale-105 hover:bg-primaryLight duration-300 ease-in-out`;

function App() {
  return (
    <Hero>
      <HeroText>
        <HeroCol>
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
        </HeroCol>
      </HeroText>
    </Hero>
  );
}

export default App;
