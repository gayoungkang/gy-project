import IconButton from "@components/button/IconButton";
import { FlexSpaceBetween } from "@components/layout/Flex";
import { NAVIGATON_PARENTS_ELEMENT_ZINDEX } from "@constants/zIndex";
import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import { ReactNode } from "react";

export type DrawerProps = {
  isOpen: boolean;
  closeDrawer: () => void;
  anchor: "left" | "right" | "top" | "bottom";
  full?: boolean;
  children: ReactNode;
};

const Drawer = (props: DrawerProps) => {
  const { isOpen, closeDrawer, anchor, full = false, children } = props;
  return (
    <>
      {!full && isOpen && <Backdrop onClick={closeDrawer} />}
      <StyledDrawer isOpen={isOpen} anchor={anchor} full={full}>
        {full && (
          <FlexSpaceBetween>
            <IconButton onClick={closeDrawer}>
              <svg
                clipRule='evenodd'
                fillRule='evenodd'
                strokeLinejoin='round'
                strokeMiterlimit='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fill={theme.color.text.primary}
              >
                <path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
              </svg>
            </IconButton>
          </FlexSpaceBetween>
        )}
        {children}
      </StyledDrawer>
    </>
  );
};

export default Drawer;

const StyledDrawer = styled.div<Omit<DrawerProps, "closeDrawer">>`
  display: flex;
  flex-direction: column;
  position: fixed;
  ${({ anchor }) => anchor}: 0;
  width: ${({ anchor, full }) =>
    anchor === "top" || anchor === "bottom"
      ? "100vw"
      : full
      ? "100vw"
      : "300px"};
  height: ${({ anchor, full }) =>
    anchor === "left" || anchor === "right"
      ? "100%"
      : full
      ? "100vh"
      : "300px"};
  color: ${theme.color.text.primary};
  transform: ${({ anchor, isOpen }) => getTransform(anchor, isOpen)};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: ${NAVIGATON_PARENTS_ELEMENT_ZINDEX};
  background-color: ${theme.color.background.dark};
`;

const getTransform = (
  anchor: "left" | "right" | "top" | "bottom",
  isOpen: boolean
) => {
  switch (anchor) {
    case "left":
      return isOpen ? "translateX(0)" : "translateX(-100%)";
    case "right":
      return isOpen ? "translateX(0)" : "translateX(100%)";
    case "top":
      return isOpen ? "translateY(0)" : "translateY(-100%)";
    case "bottom":
      return isOpen ? "translateY(0)" : "translateY(100%)";
  }
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${NAVIGATON_PARENTS_ELEMENT_ZINDEX - 1};
`;
