import Link from 'next/link'
import Head from "next/head"

function Home(){
    return (
    <div>
        <Head>
            <link rel="icon"type="image/x-icon"href="./favicon.ico"/>
            <title>Home</title>
        </Head>
        <h1>Home</h1>
        <img src="/favicon.png"/>
        <img src="./favicon.ico"/>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>
    )
}


export default Home