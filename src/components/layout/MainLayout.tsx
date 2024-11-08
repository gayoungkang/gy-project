import styled from "@emotion/styled";
import { ReactNode, Suspense, useState } from "react";
import Loading from "./Loading";
import Navigation from "./Navigation";
import Header from "./Header";
import Sidebar from "./SidBar";

/**---------------------------------------------------------------------------/

  * ! MainLayout

  * * 기본 화면

/**--------------------------------------------------------------------------*/
const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Suspense fallback={<Loading visibility />}>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Header toggleSidebar={toggleSidebar}>
        <Navigation />
      </Header>

      <StyledBody>{children}</StyledBody>
    </Suspense>
  );
};

export default MainLayout;

export const StyledBody = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 50px 12px 12px 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
`;
