import styled from "@emotion/styled";
import theme from "@styles/theme";
import { ReactNode } from "react";

export type IconButtonProps = {
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
};
/**---------------------------------------------------------------------------/

  * ! IconButton
  
  * * 프로젝트 아이콘 버튼 UI 컴포넌트
  
/**--------------------------------------------------------------------------*/
const IconButton = (props: IconButtonProps) => {
  const { size = "medium", children, onClick } = props;
  return (
    <StyledIconButton onClick={onClick} size={size}>
      {children}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<{ size: "small" | "medium" | "large" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  :hover {
    background-color: ${theme.color.disabled.light};
  }

  svg {
    width: ${({ size }) => {
      switch (size) {
        case "small":
          return `${theme.fontSize.small}`;
        case "medium":
          return `${theme.fontSize.medium}`;
        case "large":
          return `${theme.fontSize.large}`;
        default:
          return `${theme.fontSize.medium}`;
      }
    }};
  }
`;

export default IconButton;
