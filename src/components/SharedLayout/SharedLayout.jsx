// imports
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
//import component
import Header from './Header/Header';
import Footer from './Footer/Footer';
// css
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
const MainWrapper = styled.div`
  background: linear-gradient(#141e30, #243b55);
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Main = styled.main`
  min-height: 100vh;
`;
//
const SharedLayout = () => {
  return (
    <>
      <MainWrapper>
        <Content>
          <Header />

          <Main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Main>
          <Footer />
        </Content>
      </MainWrapper>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
