import Head from 'next/head';
import Home from '@/components/home/Home';
import { client } from '../../sanity/lib/client';

export default function Index({ products }) {
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

            <Home products={products} />
        </>
    );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "shoe"]';
    const products = await client.fetch(query);

    return {
        props: {
            products
        }
    };
};
