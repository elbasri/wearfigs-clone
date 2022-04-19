import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ProductComponent from '../../src/components/product/';
import {getProducts, getVariations} from '../../src/utils/constants';
import { getColors, prepareVariations, sizeOptions } from '../../src/utils/helpers';

const Product = (props) => {
    /* const router = useRouter();
    const something = router.query; */
    const  {product, variations } = props;
    const [varColor,setVarColor] = useState(null);
    const [color, setColor] = useState();
    const [size,setSize] = useState(null);
    const [fit,setFit] = useState(null);

    // if grouped product
    const [color2, setColor2] = useState(null);
    const [size2,setSize2] = useState(null);
    const [fit2,setFit2] = useState(null);


    return(<>
                <Head>
                    <title>
                        {product[0].name}
                    </title>
                </Head>
                <ProductComponent product={product} variations={variations} />
           </>)
}

export default Product;

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { slug } = params;
    try {
        const getProduct = await getProducts(null, 1, null,slug);
        const { data: product } = getProduct;
        const {data: variations} = product ? await getVariations(product[0].id) : null;
        if (!product || !variations) {
            return {
            notFound: true,
            }
        }
        return {
            props :{
                product,
                variations
            }
        }
    } catch (error) {
        return {
            notFound: true,
            }
    }

}