import styled from "@emotion/styled";

export type ChipProps = {
  label: string;
  variant?: "outlined" | "filled";
  onClick?: () => void;
};

const Chip = (props: ChipProps) => {
  const { label, variant = "filled", onClick } = props;

  return (
    <StyledChip onClick={onClick} variant={variant}>
      {label}
    </StyledChip>
  );
};

export const StyledChip = styled.div<{ variant?: "outlined" | "filled" }>`
  padding: 0 12px;
  background-color: ${({ variant }) =>
    variant === "filled" ? "#e0e0e0" : "transparent"};
  border: ${({ variant }) =>
    variant === "outlined" ? "none" : "1px solid #e0e0e0"};
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default Chip;
