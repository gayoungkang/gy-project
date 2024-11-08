import {
  COMMON_CHILD_ELEMENT_ZINDEX,
  COMMON_PARENTS_ELEMENT_ZINDEX,
  POPUP_ZINDEX,
} from "@constants/zIndex";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { wave } from "@/styles/animations";

export type LoadingProps = {
  visibility: boolean;
  message?: string;
};
/**---------------------------------------------------------------------------/

  * ! Loading

  * * 화면 전환시 loading 기본 UI 컴포넌트

/**--------------------------------------------------------------------------*/
const Loading = (props: LoadingProps) => {
  const { message, visibility } = props;
  const [loadingVisibility, setLoadingVisibility] = useState(visibility);
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setLoadingVisibility(visibility);
  }, [visibility]);

  if (!loadingVisibility || !isDeferred) return null;

  return (
    <StyledContainer>
      <StyledBody>
        <StyledBox>
          <StyledCircle
            style={{
              backgroundColor: "#7ef9ff",
            }}
          />
          <StyledCircle
            style={{
              backgroundColor: "#89cff0",
            }}
          />
          <StyledCircle
            style={{
              backgroundColor: "#4682b4",
            }}
          />
          <StyledCircle
            style={{
              backgroundColor: "#0f52ba",
            }}
          />
          <StyledCircle
            style={{
              backgroundColor: "#000080",
            }}
          />
        </StyledBox>
        {message && <StyledTypography>{message}</StyledTypography>}
      </StyledBody>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${POPUP_ZINDEX};
  background-color: transparent;
`;

const StyledBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledBox = styled.div`
  display: flex;
`;

const StyledCircle = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  z-index: ${COMMON_PARENTS_ELEMENT_ZINDEX};

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    z-index: ${COMMON_CHILD_ELEMENT_ZINDEX};
    opacity: 0.7;
    animation: ${wave} 2s ease-out infinite;
  }
  &:nth-of-type(1)::before {
    animation-delay: 0.2s;
  }
  &:nth-of-type(2)::before {
    animation-delay: 0.4s;
  }
  &:nth-of-type(3)::before {
    animation-delay: 0.6s;
  }
  &:nth-of-type(4)::before {
    animation-delay: 0.8s;
  }
  &:nth-of-type(5)::before {
    animation-delay: 1s;
  }
`;

const StyledTypography = styled.p`
  text-align: center;
  margin-top: 16px;
  color: white;
  font-size: 1.25rem;
`;

export default Loading;
