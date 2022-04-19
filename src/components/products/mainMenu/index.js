/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import {useState} from 'react'
import ImageComp from './imageComponent'
import {isArray, isEmpty} from 'lodash'

const MainMenu = ({products}) => {

    return (<div className="col-xs-12 col-md-8 col-lg-9 mt-2 mb-5" id="product">
                <div className="productsContainer mb-5">
                    <div className="productsRows">
                        <>
                             {!isEmpty(products) ?? isArray(products) ?  products.map(e => <ImageComp key={e.name} product={e}/> ) : null}
                            {/* <ImageComp/>
                            <ImageComp/>
                            <ImageComp/>
                            <ImageComp/>
                            <ImageComp/> */}
                        </>

                    </div>
                </div>
            </div>);
}

export default MainMenu;