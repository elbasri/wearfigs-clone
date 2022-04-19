import SideMenu from "../products/sideMenu";
import MainMenu from "../products/mainMenu";



const Products = ({products}) => {
    return (
        <>
            <div className="row productsRow mb-5">
                <SideMenu/>
                <MainMenu products={products}/>
            </div>

        </>
    );
}

export default Products;