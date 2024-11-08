import styled from "@emotion/styled";
import theme from "@styles/theme";

export type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "caption"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  children: React.ReactNode;
};
/**---------------------------------------------------------------------------/

  * ! Card
  
  * * 프로젝트 기본 Typography UI 컴포넌트
  
/**--------------------------------------------------------------------------*/
const Typography = (props: TypographyProps) => {
  const { variant, children } = props;

  const Tag =
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4" ||
    variant === "h5" ||
    variant === "h6"
      ? variant
      : variant === "caption" || variant === "overline"
      ? "span"
      : "p";

  return (
    <StyledTypography as={Tag} variant={variant}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled("div")<TypographyProps>`
  ${({ variant }) => {
    const typographyStyles = theme.typography[variant];

    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return `
          font-size: ${typographyStyles.fontSize};
          font-weight: ${typographyStyles.fontWeight};
          line-height: ${typographyStyles.lineHeight};
        `;
      case "subtitle1":
      case "subtitle2":
        return `
          font-size: ${typographyStyles.fontSize};
          font-weight: ${typographyStyles.fontWeight};
          line-height: ${typographyStyles.lineHeight};
        `;
      case "body1":
      case "body2":
        return `
          font-size: ${typographyStyles.fontSize};
          font-weight: ${typographyStyles.fontWeight};
        `;
      case "caption":
        return `
          font-size: ${typographyStyles.fontSize};
          line-height: ${typographyStyles.lineHeight};
        `;
      case "overline":
        return `
          font-size: ${typographyStyles.fontSize};
          font-weight: ${typographyStyles.fontWeight};
          text-decoration: ${typographyStyles.textDecoration};
          color: ${typographyStyles.color};
          white-space: ${typographyStyles.whiteSpace};
        `;
      default:
        return null;
    }
  }}
`;

export default Typography;
