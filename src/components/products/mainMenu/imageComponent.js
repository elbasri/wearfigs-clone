/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link'
import {useState, useEffect} from 'react'
import {isEmpty, isArray} from 'lodash';
import {getColors,getImageByColor, extractSizes} from '../../../utils/helpers'
import DOMPurify from 'isomorphic-dompurify';
import SelectColor from './selectColor';
import { getVariations } from '../../../utils/constants';


const ImageComp = ({product}) => {
    const [color,setColor] = useState('Black');
    const [ImageArr,SetImageArr] = useState([]);
    const [colors,SetColors] = useState([]);
    const [size, setSize] = useState(null);
    const [fit, setFit] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [fitList,setFitList] = useState(null);
    const [sizesFits,setSizesFits] = useState(null);
    const [selectedColor,setSelectedColor] = useState("Black");
    const [variations,setVariations] = useState();

    const arr = product.images.map(e => e);
    const img = product.images[1];


    useEffect(()=>{
        if(!isEmpty(product)) {
            SetColors(getColors(product.attributes));
            const arr = getImageByColor(product.images, 'Black');
            SetImageArr(arr);
            console.log('images ',arr)
            //setSizesFits(extractSizes(variations, selectedColor));
        }
    },[product]);

    //change active color
    const changeColor = (e) => {
        const siblings = e.target.parentNode.children;
        for(let item of siblings) {
            item.classList.remove('ColorActive');
        }
        e.target.classList.add('ColorActive');
    }

    const selectColor = (e) => {
        setSelectedColor(e);
        setSize(null);
        setSizesFits(extractSizes(variations, e));
        const arr = getImageByColor(product[0].images, e);
        if(isArray(arr) && !isEmpty(arr)){ //if color has no photo
            setImage(arr);
        }
    };

    const selectSize = (e) => {
        setSize(e.size)
        setFit(null)
        if(e.fits.length){
            setFitList(e.fits);
        }
    }

    return(
        <>  {product ?
                <div className='col-xs-12 products-lists'>
                    <div className='product-tile'>

                            <div className='productImageContainer'>

                                <div className='imageDiv'>
                                     <Link href={'/product/'+product.slug} >
                                         <a>
                                            <img className='img-responsive' src={ ImageArr.length ? ImageArr[0].src : null }/>
                                            <img className='img-responsive hoverImage' src={ImageArr.length ? ImageArr[1].src : null}/>
                                        </a>
                                    </Link>
                                    <div className='imageCaption hide'>
                                        <p id="imageCaptionText">QUICK BUY</p>
                                    </div>
                                </div>

                                <div className='productOptions mt-2'>
                                    <div className='productType'>
                                        New
                                    </div>
                                    <div className='productTitle'>
                                        <Link href={'/product/'+product.slug}>
                                        Leon™ Three-Pocket Scrub Top
                                        </Link>
                                    </div>
                                    <div className='productCharacteristics mt-2'>
                                        <span className='selectedColor'>Black</span>
                                        <span>7 colors</span>
                                    </div>
                                    <div className='productPrice mt-2' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.price_html ?? '')}}>
                                    </div>
                                    <div className='productRemark mt-2'>
                                            Also in Petite & Tall
                                    </div>
                                    <div className='colorSection mt-2'>
                                    <SelectColor
                                            colors={colors}
                                            setSelectedColor = {selectColor}
                                            selectedColor={selectedColor}
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>
            </div> : null}
        </>

    );
}

export default ImageComp;