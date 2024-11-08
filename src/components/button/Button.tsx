import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { theme } from "@styles/theme";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
};
/**---------------------------------------------------------------------------/

  * ! Button
  
  * * 프로젝트 기본 버튼 UI 컴포넌트
  
/**--------------------------------------------------------------------------*/
const Button = (props: ButtonProps) => {
  const {
    label,
    disabled,
    variant = "contained",
    size = "medium",
    type = "button",
    startIcon,
    endIcon,
    href,
    onClick,
    ...other
  } = props;

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      label={label}
      onClick={handleClick}
      {...other}
    >
      {startIcon && startIcon}
      <span>{label}</span>
      {endIcon && endIcon}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius};
  line-height: 1.75;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  span {
    margin: 0 2px;
    ${({ size }) =>
      size === "large" &&
      css`
        font-size: ${theme.fontSize.large};
      `}

    ${({ size }) =>
      size === "medium" &&
      css`
        font-size: ${theme.fontSize.medium};
      `}

  ${({ size }) =>
      size === "small" &&
      css`
        font-size: ${theme.fontSize.small};
      `}
  }
  svg {
    fill: currentColor;
    transition: width 0.3s, height 0.3s;
  }

  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: ${theme.color.primary.main};
      color: ${theme.color.white};
      &:hover {
        background-color: ${theme.color.primary.dark};
      }
      &:disabled {
        color: ${theme.color.disabled.main};
        box-shadow: none;
        background-color: ${theme.color.disabled.light};
        cursor: not-allowed;
        &:hover {
          background-color: ${theme.color.disabled.light};
        }
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.color.primary.main};
      background-color: transparent;
      color: ${theme.color.primary.main};
      &:hover {
        background-color: ${theme.color.primary.dark};
        border: 1px solid ${theme.color.primary.light};
      }

      &:disabled {
        color: ${theme.color.disabled.main};
        border: 1px solid ${theme.color.disabled.main};
        background-color: transparent;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      border: 0;
      color: ${theme.color.primary.main};
      background-color: transparent;
      &:hover {
        background-color: ${theme.color.primary.light};
      }
      svg {
        fill: currentColor;
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: ${theme.size.medium};
      font-size: ${theme.fontSize.large};
      svg {
        width: ${theme.fontSize.large};
      }
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: ${theme.size.medium};
      font-size: ${theme.fontSize.medium};
      svg {
        width: ${theme.fontSize.medium};
      }
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: ${theme.size.small};
      font-size: ${theme.fontSize.small};
      svg {
        width: ${theme.fontSize.small};
      }
    `}
`;

export default Button;
