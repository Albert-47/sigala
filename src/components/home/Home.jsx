import Banner from './Banner';
import Carousel from './Carousel';
import Categories from './Categories';
import ProductCategories from './ProductCategories';

const Home = ({ products }) => {
    return (
        <>
            <Banner />
            <ProductCategories />
            <Carousel products={products} />
            <Categories />
        </>
    );
};

export default Home;
