import {Accordion} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { isArray, isEmpty } from 'lodash';
import DOMPurify from 'isomorphic-dompurify';
import ColorItem from './colorItem';
import { getColors, getImageByColor, prepareVariations, extractSizes } from '../../../utils/helpers';



const SideMenu = ({changeColor, product, setImage, variations}) => {

    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [fit, setFit] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [fitList,setFitList] = useState(null);
    const [sizesFits,setSizesFits] = useState(null);
    const [colors,setColors] = useState(null);
    const [selectedColor,setSelectedColor] = useState("Black");


    //let varByColor = prepareVariations(variations, selectedColor); //variations by color

    //console.log('color ',varByColor)

    useEffect(()=>{
        if(!isEmpty(product)) {
            setColors(getColors(product[0].attributes));
            const arr = getImageByColor(product[0].images, 'Black');
            setImage(arr);
            setSizesFits(extractSizes(variations, selectedColor));
        }
    },[product]);


    if( isEmpty(product) || !isArray(product) ){
        return null;
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


    const { name, price_html, description, tags } = product[0];

    return(
        <aside className="col-12 col-sm-12 col-md-4 col-lg-4 sideColumn">
            <div className="product-head mt-5">
                <h1 className='mb-3'>{name}</h1>
                <span className="price mt-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(price_html ?? '')}}></span>
                <div className="product-tags my-3">
                    {
                        tags && tags.length ? tags.map( e =>{
                            return (<span key={e.slug} className="p-tag">{e.name}</span>)
                        }) : null
                    }
                </div>
                <div className="product-color mt-3">
                    <p>Color</p>
                    <ColorItem
                        colors={colors}
                        setSelectedColor = {selectColor}
                        selectedColor={selectedColor}
                    />
                </div>
                <div className="product-size my-2">
                    {
                       isArray(sizesFits) && !isEmpty(sizesFits) ?
                       <>
                        <p>Size</p>
                        <div className="pl-size">
                            {
                            sizesFits.map( (e) => {
                               return (<div
                                         key={e.size}
                                         className={e.size === size ? "p-size btn btn-secondary": "p-size btn btn-outline-secondary"}
                                         onClick={ () => selectSize(e)}
                                         >{e.size}</div>)
                            })
                            }

                        </div>
                        </>: null
                    }
                </div>
                <div className="product-size my-2">
                    {
                       !isEmpty(fitList)  ?
                       <>
                        <p>Fits</p>
                        <div className="pl-size">
                            {
                            fitList.map( (e) => {
                               return (<div
                                         key={e}
                                         className={e === fit ? "p-size btn btn-secondary": "p-size btn btn-outline-secondary"}
                                         onClick={ () => setFit(e)}
                                         >{e}</div>)
                            })
                            }

                        </div>
                        </>: null
                    }
                </div>
            </div>
            <hr/>
            <div className="product-bag mt-5 pr-10">
                <p className="bag-intro">
                    Add embroidery
                </p>
                <div className="d-flex col-12" style={{ gap: '4px'}}>
                    <select
                        className='col-3'
                        style={{
                                height: '50px',
                                marginTop: '3rem',
                        }}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    >
                             <option value="1">Qty: 1</option>
                             <option value="2">Qty: 2</option>
                             <option value="3">Qty: 3</option>
                             <option value="4">Qty: 4</option>
                             <option value="5">Qty: 5</option>
                             <option value="6">Qty: 6</option>
                             <option value="7">Qty: 7</option>
                             <option value="8">Qty: 8</option>
                             <option value="9">Qty: 9</option>
                             <option value="10">Qty: 10</option>
                     </select>
                     <button type="button" className="btn btn-dark btn-lg col-8 mt-5 ml-1">Add To Bag</button>
                </div>

                <div className="underButton mt-5" >4 easy payments of $9.50 withPay over time with Affirm.</div>
                <hr/>
                <div className=" productDescription mt-5" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description ?? '') }}>
                </div>
            </div>
            <hr/>
            <div className="product-extra mt-5">
                 <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Reviews</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </aside>
    );
}

export default SideMenu;