import IconButton from "@components/button/IconButton";
import { NAVIGATON_CHILD_ELEMENT_ZINDEX } from "@constants/zIndex";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export type HeaderProps = {
  toggleSidebar: () => void;
  children: ReactNode;
};

/**---------------------------------------------------------------------------/

  * ! Header

  * * 메인 헤더

/**--------------------------------------------------------------------------*/

const Header = (props: HeaderProps) => {
  const { toggleSidebar, children } = props;
  return (
    <StyledHeader>
      <IconButton onClick={toggleSidebar}>
        <svg
          clipRule='evenodd'
          fillRule='evenodd'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path
            d='m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z'
            fillRule='nonzero'
          />
        </svg>
      </IconButton>
      {children}
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.color.black};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${NAVIGATON_CHILD_ELEMENT_ZINDEX};
  svg:first-child {
    fill: ${({ theme }) => theme.color.white};
  }
`;
