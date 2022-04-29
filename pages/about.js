import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

const about = () =>{

	return <div className="about">
        <Head>
            <title>Pub | About Us</title>
        </Head>
		<img src="/assets/ganiu.jpg" alt="Ganiu Ibrahim Image" />
		
        <div>
            <h1 className="special">About Us</h1>
            <p>
                I am Ganiu Ibrahim Olalekan the frontend web developer who created this project.
                <br /><br />
                Pub is a side project about beers. The project was created using NextJs and API 
                from https://punkapi.com.
                
                <br /><br />
                Checkout my portfolio with the link below to see all my awesome web projects 
                or contact me for hire.
                <br />
                {/* <a href="https://portfolio-f576a.web.app/projects" target='_blank'
                 rel="noreferrer">
                    Portfolio
                </a> */}
            </p>

            <Link href='https://portfolio-f576a.web.app/projects'>Portfolio</Link>
        </div>
	</div>
}

export default about;