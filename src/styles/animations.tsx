import { keyframes } from "@emotion/react";

export const scaleFrame = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
     transform: scale(1)
  }
`;

export const bounce1 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const bounce2 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const bounce3 = keyframes`
  0%{
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const rotation = keyframes`
  from {
     transform: rotate(0deg);
  }
  to {
     transform: rotate(360deg);
  }
`;

export const gradientFade = keyframes`
  from {
    transform: translate(10%, -10%) rotate(0deg);
  }
  to {
     transform: translate(50%, -50%) rotate(360deg);
  }
`;

export const gradientFadeAlt = keyframes`
  from {
       transform: translate(-20%, 20%) ;
  }
  to {
    transform: translate(-60%, 60%);
  }
`;

export const wave = keyframes`
50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }

`;

export const line1 = keyframes`
	  0%{
        left: -100%;
    }
    50%{
      left: 100%; 
    }
    100%{
        left: 0;
    }
`;
export const line2 = keyframes`
	 0%{
        top: -100%;
    }
    50%{
      top: 100%;
    }
    100%{
       top: 0;
    }
`;
export const line3 = keyframes`
	  0%{
        right: -100%;
    }
    50%{
      right: 100%;
    }
    100%{
        right: 0;
    }
`;
export const line4 = keyframes`
	0%{
        bottom: -100%;
    }
    50%{
      bottom: 100%;
    }
    100%{
        bottom: 0;
    }
`;
