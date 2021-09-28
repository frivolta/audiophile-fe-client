import tw from "tailwind-styled-components";
import LogoDesktop from "./assets/shared/desktop/logo.svg";
import IconCart from "./assets/shared/desktop/icon-cart.svg";

const MENU_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Headphones",
    path: "/headphones",
  },
  {
    label: "Speakers",
    path: "/speakers",
  },
  {
    label: "Earphones",
    path: "/earphones",
  },
];

const Hero = tw.div`
flex justify-around mx-auto md:flex-row items-center bg-hero-image-desktop
bg-center bg-no-repeat bg-cover
`;

const HeroText = tw.div`
container pb-40 pt-64
`;

const HeroCol = tw.div`
flex flex-col w-3/7 items-start`;

type TextOverlineProps = {
  $alt?: boolean;
};
const TextOverline = tw.div<TextOverlineProps>`
${(p) => (p.$alt ? `text-white` : `text-primary`)}
text-sm tracking-overline overline uppercase opacity-50`;

const TextDisplay = tw.h1`my-4 text-display text-white font-bold uppercase`;
const TextHeroBody = tw.p`text-white text-heroBody font-extralight pr-8 opacity-75`;
const Button = tw.button`bg-primary text-white uppercase text-button font-bold
my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform
transition hover:scale-105 hover:bg-primaryLight duration-300 ease-in-out`;

function App() {
  return (
    <Hero>
      <div className="absolute top-0 left-0 right-0 w-full bg-transparent">
        <div className="container mx-auto h-24 items-center grid grid-cols-4 border-b border-opacity-20">
          <div className="logo col-span-1 flex justify-start">
            <img src={LogoDesktop} alt="audiophile ecommerce" />
          </div>
          <div className="menu col-span-2 flex justify-center">
            <ul className="inline-flex text-white uppercase text-subtitle font-bold">
              {MENU_LINKS.map((link) => (
                <li key={link.label} className="px-4">
                  <a href={link.path} aria-label={link.label}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="cart col-span-1 flex justify-end"
            onClick={() => console.log("cart")}
          >
            <img src={IconCart} alt="Cart" />
          </div>
        </div>
      </div>
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
