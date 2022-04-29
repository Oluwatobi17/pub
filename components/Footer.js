import Link from "next/link";

const Footer = () =>{
    return(
        <footer>
            <div>
                <div>
                    <h2 className="special">Pub</h2>
                    <p>Pub is a side project by Ganiu Ibrahim Olalekan about beers. The
                         project was created using
                         NextJs and API from https://punkapi.com.</p>
                </div>

                <div>
                    <h2 className="special">Useful Links</h2>
                    <div className="footer-links">
                        <Link href='/'>Home</Link>
                        <Link href='/favorites'>Favorite</Link>
                        <Link href='/about'>About</Link>
                    </div>
                </div>
            </div>
            <p>© Copyright 2022 by Ganiu Ibrahim Olalekan. All Rights Reserved. </p>
        </footer>
    );
}

export default Footer;
