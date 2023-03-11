import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sigala Shop</title>
                <meta
                    name='description'
                    content='The shop that has it all on shoes and accessories.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>I am the landing</main>
        </>
    );
}
