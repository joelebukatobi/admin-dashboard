// import '../styles/main.scss';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from 'store/store';

function MyApp({ Component, pageProps }) {
  const pathname = useRouter().pathname;
  if (pathname === '/admin' || pathname.includes('admin')) {
    require('../styles/admin.scss');
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
