// import '../styles/main.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const pathname = useRouter().pathname;
  if (pathname === '/admin' || pathname.includes('admin')) {
    require('../styles/admin.scss');
  }
  return <Component {...pageProps} />;
}

export default MyApp;
