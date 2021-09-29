import tw from "tailwind-styled-components";
import LogoDesktop from "./assets/shared/desktop/logo.svg";
import IconCart from "./assets/shared/desktop/icon-cart.svg";
import IconHamburger from "./assets/shared/tablet/icon-hamburger.svg";
import IconClose from "./assets/shared/tablet/icon-close.svg";
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

// ---------- Hero
const Hero = tw.div`
flex justify-around mx-auto md:flex-row items-center xl:bg-hero-image-desktop bg-hero-image-mobile
bg-center bg-no-repeat bg-cover lg:text-left text-center
`;

const HeroText = tw.div`
container pb-40 pt-64
`;

const HeroCol = tw.div`
flex flex-col items-center w-full xl:w-3/7 xl:items-start`;

type TextOverlineProps = {
  $alt?: boolean;
};
const TextOverline = tw.div<TextOverlineProps>`
${(p) => (p.$alt ? `text-white` : `text-primary`)}
text-sm tracking-overline overline uppercase opacity-50`;

const TextDisplay = tw.h1`my-4 text-display text-white font-bold uppercase`;
const TextHeroBody = tw.p`text-white text-heroBody font-extralight opacity-75`;
const Button = tw.button`bg-primary text-white uppercase text-button font-bold
my-6 py-4 px-8  focus:outline-none focus:shadow-outline transform
transition hover:scale-105 hover:bg-primaryLight duration-300 ease-in-out`;

//-------- Menu
const MenuWrapper = tw.div`absolute top-0 left-0 right-0 w-full bg-transparent`;
const MenuGridContainer = tw.div`container mx-auto h-24 items-center grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-3 border-b border-opacity-20`;
const MenuColLeft = tw.div`logo col-span-1 flex justify-start items-center`;
const HamburgerWrapper = tw.div`hamburger xl:hidden col-span-1 pr-8 pl-8 sm:pl-0`;
const MenuCenterColMobile = tw.div`logo-mobile sm:hidden`;
const MenuCenterColDesktop = tw.div`menu col-span-2 hidden justify-center xl:flex`;
const MenuNavigationListContainerDesktop = tw.ul`inline-flex text-white uppercase text-subtitle font-bold`;
const MenuNavigationListItemDesktop = tw.li`px-4`;
const MenuRightCol = tw.div`cart col-span-1 flex justify-end pr-8 sm:pr-0`;
const MobileMenuContainer = tw.div`hidden flex mx-auto fixed bg-secondary bg-opacity-95 top-0 left-0 right-0 bottom-0 min-h-full z-20 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center`;
const MobileMenuNavigationList = tw.ul`text-white uppercase text-subtitle`;
const MenuNavigationListItemMobile = tw.li`px-4 py-4`;
const MobileMenuCloseContainer = tw.div`mobile__close absolute w-4 top-10 left-10`;

type MenuNavigationList = { $isMobile?: boolean };
const MenuNavigationListLink = tw.a<MenuNavigationList>`
${(p) => (p.$isMobile ? "text-mobileMenu" : "")}
hover:text-primary
duration-300
ease-in-out`;

function App() {
  return (
    <Hero>
      <MenuWrapper>
        <MenuGridContainer>
          <MenuColLeft>
            <HamburgerWrapper>
              <img src={IconHamburger} />
            </HamburgerWrapper>
            <img
              src={LogoDesktop}
              alt="audiophile ecommerce"
              className="hidden sm:block"
            />
          </MenuColLeft>
          <MenuCenterColMobile>
            <img src={LogoDesktop} alt="audiophile ecommerce" />
          </MenuCenterColMobile>
          <MenuCenterColDesktop>
            <MenuNavigationListContainerDesktop>
              {MENU_LINKS.map((link) => (
                <MenuNavigationListItemDesktop>
                  <MenuNavigationListLink
                    href={link.path}
                    aria-label={link.label}
                  >
                    {link.label}
                  </MenuNavigationListLink>
                </MenuNavigationListItemDesktop>
              ))}
            </MenuNavigationListContainerDesktop>
          </MenuCenterColDesktop>
          <MenuRightCol onClick={() => console.log("cart")}>
            <img src={IconCart} alt="Cart" />
          </MenuRightCol>
        </MenuGridContainer>
      </MenuWrapper>
      <MobileMenuContainer>
        <MobileMenuCloseContainer>
          <img src={IconClose} />
        </MobileMenuCloseContainer>
        <MobileMenuNavigationList>
          {MENU_LINKS.map((link) => (
            <MenuNavigationListItemMobile>
              <MenuNavigationListLink
                $isMobile
                href={link.path}
                aria-label={link.label}
              >
                {link.label}
              </MenuNavigationListLink>
            </MenuNavigationListItemMobile>
          ))}
        </MobileMenuNavigationList>
      </MobileMenuContainer>
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
