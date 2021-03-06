import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="header-height-fix"></div>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
