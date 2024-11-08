import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "@styles/theme";
import { ReactNode } from "react";

export type CardProps = {
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
};

/**---------------------------------------------------------------------------/

  * ! Card
  
  * * 프로젝트 기본 카드 UI 컴포넌트
  
/**--------------------------------------------------------------------------*/
const Card = (props: CardProps) => {
  const {
    variant = "contained",
    onClick,
    size = "medium",
    children,
    mb,
    mt,
    mr,
    ml,
  } = props;
  return (
    <StyledCard
      variant={variant}
      onClick={onClick}
      size={size}
      mb={mb}
      mt={mt}
      mr={mt}
      ml={ml}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div<CardProps>`
  width: 100%;
  min-height: 8vh;
  border-radius: ${theme.borderRadius};
  color: ${theme.color.white};

  ${({ size }) =>
    size === "large" &&
    css`
      padding: ${theme.size.large};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: ${theme.size.medium};
    `}
  
  ${({ size }) =>
    size === "small" &&
    css`
      padding: ${theme.size.small};
    `}

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: ${theme.color.background.main};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.color.background.main};
      background-color: transparent;
    `}

    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
`;
