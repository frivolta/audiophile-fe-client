import React from "react";
import {
  HamburgerWrapper,
  HeaderCenterColDesktop,
  HeaderCenterColMobile,
  HeaderColLeft,
  HeaderGridContainer,
  HeaderRightCol,
  HeaderWrapper,
} from "./styles";
import LogoDesktop from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import IconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { DesktopMenu, MobileMenu } from "../Menu";

// Mobile Context to open/close mobile menu
interface MobileMenuState {
  isMobileOpen: boolean;
  triggerMobileMenu: () => void;
}

const initialMobileMenuState: MobileMenuState = {
  isMobileOpen: false,
  triggerMobileMenu: () => console.warn("No active mobile state"),
};

export const MobileMenuContext = React.createContext<MobileMenuState>(
  initialMobileMenuState
);

export const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const triggerMobileMenu = React.useCallback(() => {
    setIsMobileOpen(!isMobileOpen);
  }, [isMobileOpen]);

  return (
    <MobileMenuContext.Provider value={{ isMobileOpen, triggerMobileMenu }}>
      <React.Fragment>
        <HeaderWrapper>
          <HeaderGridContainer>
            <HeaderColLeft>
              <HamburgerWrapper onClick={triggerMobileMenu}>
                <img src={IconHamburger} />
              </HamburgerWrapper>
              <img
                src={LogoDesktop}
                alt="audiophile ecommerce"
                className="hidden sm:block"
              />
            </HeaderColLeft>
            <HeaderCenterColMobile>
              <img src={LogoDesktop} alt="audiophile ecommerce" />
            </HeaderCenterColMobile>
            <HeaderCenterColDesktop>
              <DesktopMenu />
            </HeaderCenterColDesktop>
            <HeaderRightCol>
              <img src={IconCart} alt="Cart" />
            </HeaderRightCol>
          </HeaderGridContainer>
          <MobileMenu />
        </HeaderWrapper>
      </React.Fragment>
    </MobileMenuContext.Provider>
  );
};
