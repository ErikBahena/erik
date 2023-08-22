import { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import { Router } from 'next/router';
import * as NProgress from 'nprogress';
import '../styles/globals.css';
import '../styles/themes.css';
import { Analytics } from '@vercel/analytics/react';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme'),
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Erik Bahena | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
