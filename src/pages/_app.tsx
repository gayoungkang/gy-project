import { QueryClient, QueryClientProvider } from "react-query";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/globalStyles";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";
import MainLayout from "@components/layout/MainLayout";
import theme from "@styles/theme";

const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> &
  AppProps & {
    getLayout?: (page: ReactElement) => ReactNode;
    Component: NextPageWithLayout;
  };
/**---------------------------------------------------------------------------/

  * ! _app
  
  * * 공통 레이아웃임으로 최초 실행되며 내부에 컴포넌트들을 실행
  * * Component, pageProps 받음

/**--------------------------------------------------------------------------*/
const App = (props: NextPageWithLayout) => {
  const { Component, pageProps } = props;
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Head>
        <title>gy project</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
