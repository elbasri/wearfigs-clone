import Header from './header'
import Head from 'next/head'
import Footer from './footer'

const Layout = ({ mainTitle, footer, children}) => {
    return (
        <>
            <Head>
                <title>
                    {mainTitle}
                </title>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>

    )
}

export default Layout;