/* eslint-disable react-hooks/exhaustive-deps */
import '../src/styles/index.scss'
import Layout from '../src/components/layout'

function MyApp({ Component, pageProps }) {


  return(
    <Layout mainTitle='Home Page'>
        <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp


