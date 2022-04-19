/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashCan
  } from "@fortawesome/free-solid-svg-icons";
import ItemQuantity from './itemQuantity';

const CardItem = () => {
    return (    <div className="cardNormalItem">
                    <div className="regularCard">
                        <Link href="/product" passHref>
                            <a>
                                <div className="cardImg">
                                    <img className='image' src="https://cdn.shopify.com/s/files/1/0139/8942/products/Womens-Heathered-Night-Sky-On-Shift-Sweater-Jacket-1.jpg?v=1646759762" alt="" />
                                </div>
                            </a>
                        </Link>
                        <div className="regularItemDetail">
                            <div className="regularItemRow">
                                <h3 className="cardDetailTitle">
                                    On-Shift™ Sweater Knit Jacket
                                </h3>
                            </div>
                            <div className="regularItemRow">
                                <p className="regularItemColumn columnText">S Heathered night sky</p>
                                <div className="regularItemColumn columnAction">
                                    <span className="itemPrice">125$</span>
                                    <div className="itemDelete">
                                        <FontAwesomeIcon icon={faTrashCan} size="1x" />
                                    </div>
                                </div>
                            </div>
                            <div className="regularItemRow">
                                <div className="itemQuantity">
                                    <ItemQuantity />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )
}

export default CardItem;