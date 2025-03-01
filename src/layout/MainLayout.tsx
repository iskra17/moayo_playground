import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/common/NavBar";
import MainHeader from "@/components/common/MainHeader";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Main>
      <MainContainer>
        <MainHeader />
        <div>
          <Outlet />
        </div>
      </MainContainer>
      <NavBar />
    </Main>
  );
};

export default MainLayout;

const Main = styled.main`
  max-width: 390px;
  max-height: 844px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  background-color: yellow;
`;
