import ProductDivider from "./productDivider";
import ProductInfo from "./productInfo";
import ProductPhoto from "./productPhoto";
import SideMenu from "./sideMenu"
import {useEffect, useState} from 'react'
import { isEmpty } from "lodash";

const ProductComponent = ({product, variations}) => {
    const [Color,SetColor] = useState(0)
    const [ImageArr,SetImageArr] = useState([]);
    if( isEmpty(product) ) {
        return null;
    }
    const setImg = (e) => SetImageArr(e);

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <ProductPhoto ImageArr ={ImageArr}/>
                    <SideMenu
                     variations={variations}
                     changeColor={e => SetColor(e)}
                     product={product}
                     setImage={setImg}
                     />
                </div>
            </div>
            <ProductDivider/>
            <ProductInfo/>



        </>
    );
}

export default ProductComponent;