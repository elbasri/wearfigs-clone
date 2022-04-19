import Collection from "./collection";
import HeroSection from "./heroSection";
import ImageDivider from "./imageDivider";
import ShopByCat from "./shopByCat";

const HomeMain =({categories, collections}) => {

    return (
        <main className="main">
            <HeroSection />
            <ShopByCat categories={categories}/>
            <ImageDivider/>
            <Collection collections={collections} />
        </main>
    );
};
export default HomeMain;