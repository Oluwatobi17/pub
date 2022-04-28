import Link from 'next/link';

import bannerStyle from '../styles/Banner.module.css';

const Banner = ()=>{	
	return (
        <div className={bannerStyle.banner}>
            <div className={bannerStyle.bannerCard}>
                <h1>Nourishing With Healthy <br /><span className='special'> Beer Choices </span></h1>

                <p>Learn, Evolve and Stay updated about the kitchen trend.</p>
                
                <Link href='/about'>About</Link>
            </div>
        </div>
	)
}

export default Banner;

//#f4f7ea;