import IconClose from "../../assets/shared/tablet/icon-close.svg";

import React from "react";
import { PATHS } from "../../config/routes";
import {
  MenuNavigationListContainerDesktop,
  MenuNavigationListItemDesktop,
  MenuNavigationListItemMobile,
  MenuNavigationListLink,
  MobileMenuCloseContainer,
  MobileMenuContainer,
  MobileMenuNavigationList,
} from "./styles";
import { MobileMenuContext } from "../Header";

export const DesktopMenu: React.FC = () => {
  return (
    <MenuNavigationListContainerDesktop>
      {PATHS.map((link) => (
        <MenuNavigationListItemDesktop>
          <MenuNavigationListLink href={link.path} aria-label={link.label}>
            {link.label}
          </MenuNavigationListLink>
        </MenuNavigationListItemDesktop>
      ))}
    </MenuNavigationListContainerDesktop>
  );
};

export const MobileMenu: React.FC = () => {
  const { isMobileOpen, triggerMobileMenu } = React.useContext(
    MobileMenuContext
  );

  return (
    <MobileMenuContainer $isHidden={!isMobileOpen}>
      <MobileMenuCloseContainer onClick={triggerMobileMenu}>
        <img src={IconClose} alt="Audiophile close menu" />
      </MobileMenuCloseContainer>
      <MobileMenuNavigationList>
        {PATHS.map((link) => (
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
  );
};
