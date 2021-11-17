import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="początki">
            Początki
          </SidebarLink>
          <SidebarLink onClick={toggle} to="historia">
            Historia
          </SidebarLink>
          <SidebarLink onClick={toggle} to="aktorzy">
            Aktorzy
          </SidebarLink>
          <SidebarLink onClick={toggle} to="reżyserzy">
            Reżyserzy
          </SidebarLink>
          <SidebarLink onClick={toggle} to="seriale">
            Seriale
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/filmy">Filmy</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
