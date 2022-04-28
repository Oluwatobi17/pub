import Head from 'next/head';

import Nav from './Nav';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({children})=>{	
	return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
                <title>Pub | Recipe Explorer</title>
            </Head>
            <header>
                <Nav />
                <Banner />
            </header>

            <main>
                {children}
            </main>

            <Footer />
        </>
	)
}

export default Layout;

//#f4f7ea;