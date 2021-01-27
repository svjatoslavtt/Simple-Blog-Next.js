import NextNprogress from 'nextjs-progressbar';
import { createGlobalStyle } from 'styled-components';
import App, { AppInitialProps, AppContext } from 'next/app';
import { END } from 'redux-saga';

import { wrapper } from '../redux/store';
import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
  body {
		width: 100%;
		max-width: 900px;
		padding: 0 3%;
		margin: 0 auto;
		font-family: 'Roboto', sans-serif;
		color: #333333;
		line-height: 1.6;
		box-sizing: border-box;
	}
`;

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as any).sagaTask.toPromise();
    }

    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextNprogress
          color="#ff0a00"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />

        <GlobalStyle />

        <Header />

        <main>
          <Component {...pageProps} />
        </main>
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
