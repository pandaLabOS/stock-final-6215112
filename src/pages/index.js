import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <div style = {{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
            <Head>
                <title>Home</title>
            </Head>
            <Card style={{ width: "20rem", height : "fit-content"}}>
                <Card.Body>
                    <Image 
                        src="/../public/images/cute-cat.jpeg" 
                        width = "290"
                        height = "180"
                        alt = "cute cat image"
                    />
                    <br/><br/>
                    <Card.Title>Go to Supplier Module</Card.Title>
                    <Card.Text>
                        I am leaving the index.js page blank because 
                        I think it would make integration to the stock-app-next 
                        simpler if the new functions were already
                        in the /supplier directory.
                    </Card.Text>
                    <Link href = "/supplier">
                        <button class="btn btn-primary">Go now!</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}