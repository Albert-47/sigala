import Banner from './Banner';
import Carousel from './Carousel';
import Categories from './Categories';
import ProductCategories from './ProductCategories';

const Home = () => {
    return (
        <>
            <Banner />
            <ProductCategories />
            <Carousel />
            <Categories />
        </>
    );
};

export default Home;
