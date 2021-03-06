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
import IconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { DesktopMenu, MobileMenu } from "../Menu";
import { Cart } from "../Cart";

// Mobile Context to open/close mobile menu
export interface MobileMenuState {
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

export interface HeaderProps {
  mobileInitialState?: boolean;
  fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  mobileInitialState,
  fixed,
}) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(
    mobileInitialState || false
  );

  const triggerMobileMenu = React.useCallback(() => {
    setIsMobileOpen(!isMobileOpen);
  }, [isMobileOpen]);

  return (
    <MobileMenuContext.Provider value={{ isMobileOpen, triggerMobileMenu }}>
      <React.Fragment>
        <HeaderWrapper className="z-40" $fixed={fixed}>
          <HeaderGridContainer>
            <HeaderColLeft>
              <HamburgerWrapper onClick={triggerMobileMenu}>
                <img src={IconHamburger} alt="Audiophile menu" />
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
              <Cart />
            </HeaderRightCol>
          </HeaderGridContainer>
          <MobileMenu />
        </HeaderWrapper>
      </React.Fragment>
    </MobileMenuContext.Provider>
  );
};
