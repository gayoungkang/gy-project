/**---------------------------------------------------------------------------/
  * ! FlexComponent
  * * Admin Layout 배치할 때 사용
/**--------------------------------------------------------------------------*/
import styled from "@emotion/styled";

// FlexCenter 컴포넌트
const FlexCenter = (props) => <StyledFlexCenter {...props} />;

// FlexStart 컴포넌트
const FlexStart = (props) => <StyledFlexStart {...props} />;

// FlexStartAlignStart 컴포넌트
const FlexStartAlignStart = (props) => <StyledFlexStartAlignStart {...props} />;

// FlexEnd 컴포넌트
const FlexEnd = (props) => <StyledFlexEnd {...props} />;

// FlexSpaceAround 컴포넌트
const FlexSpaceAround = (props) => <StyledFlexSpaceAround {...props} />;

// FlexSpaceBetween 컴포넌트
const FlexSpaceBetween = (props) => <StyledFlexSpaceBetween {...props} />;

// FlexSpaceBetweenAlignStart 컴포넌트
const FlexSpaceBetweenAlignStart = (props) => (
  <StyledFlexSpaceBetweenAlignStart {...props} />
);

// FlexDirectionColumn 컴포넌트
const FlexDirectionColumn = (props) => <StyledFlexDirectionColumn {...props} />;

// Styled 컴포넌트 정의
const StyledFlexCenter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;

const StyledFlexStart = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledFlexStartAlignStart = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledFlexEnd = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-start;
`;

const StyledFlexSpaceAround = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  align-content: flex-start;
`;

const StyledFlexSpaceBetween = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledFlexSpaceBetweenAlignStart = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledFlexDirectionColumn = styled("div")`
  display: flex;
  flex-direction: column;
`;

export {
  FlexCenter,
  FlexStart,
  FlexStartAlignStart,
  FlexEnd,
  FlexSpaceAround,
  FlexSpaceBetween,
  FlexSpaceBetweenAlignStart,
  FlexDirectionColumn,
};
