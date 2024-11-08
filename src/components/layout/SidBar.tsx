import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import Drawer from "@components/navigation/Drawer";

export type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};
/**---------------------------------------------------------------------------/

  * ! Sidebar

  * * 메인 사이드바

/**--------------------------------------------------------------------------*/
const Sidebar = (props: SidebarProps) => {
  const { isOpen, closeSidebar } = props;
  return (
    <Drawer isOpen={isOpen} closeDrawer={closeSidebar} anchor={"left"} full>
      <StyledNav>
        <StyledNavItem>홈</StyledNavItem>
        <StyledNavItem>서비스</StyledNavItem>
        <StyledNavItem>프로젝트</StyledNavItem>
        <StyledNavItem>연락처</StyledNavItem>
      </StyledNav>
    </Drawer>
  );
};

export default Sidebar;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledNavItem = styled.a`
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  color: ${theme.color.text.primary};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${theme.color.primary.main};
  }
`;
