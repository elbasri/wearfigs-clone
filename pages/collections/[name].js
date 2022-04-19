import { getCategories, getProducts } from "../../src/utils/constants";
import Head from 'next/head';
import { useRouter } from 'next/router'
import Products from "../../src/components/products";
import { isEmpty } from "lodash";

const Collection = ({categories, products}) => {

    if( !categories || !categories.length || isEmpty(products)){
        return(<div>null</div>)
    }
    console.log('collections ',categories)

    return (<>
                <Head>
                    <title>{ categories[0].name }</title>
                </Head>
                <header className="container d-flext my-5" style={{textAlign:'center'}}>
                    <h3>{ categories[0].name }</h3>
                </header>
                <Products products={products}/>
            </>);
}

export default Collection;


export const getServerSideProps = async (context) => {
    const { params } = context;
    const { name } = params;
    try {
        console.log(name)
        const getcat = await getCategories(null,1,null,name)
        const getProduct = await getProducts(null,9, null,null,null,name[0].id);
        const {data: categories} = getcat;
        const {data: products} = getProduct;

        if (!products) {
            return {
            notFound: true,
            }
        }
        return {
            props :{
                products,
                categories
            }
        }
    } catch (error) {
        return {
            notFound: true,
            }
    }

}

