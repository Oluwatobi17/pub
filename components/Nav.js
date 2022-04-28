import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css';

const Nav = ()=>{	
    const [path, setPath] = useState();
    const router = useRouter();
    
    useEffect(()=>{
        setPath(router.pathname);
    }, [router.pathname]);
	return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logo}><Link href='/' as='/'>Pub</Link></div>

            <div className={navStyles.links}>
                <Link href='/' className={path==='/' ? 'active' : ''}>Home</Link>
                <Link href='/favorites' as='/favorites'>Favorite</Link>
                <Link href='/about' as='/about'>About</Link>
            </div>
        </nav>
	)
}

export default Nav;