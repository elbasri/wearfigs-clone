import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faBriefcaseBlank,
    faBriefcase,
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import MiniCardItems from './minicardItems';

const BagComponent = () => {


    return (    <>
                    <div className="card">
                    <div className="col-xs-12">
                        <div className="cardContainer">
                            <div className='cardHeader'>
                                <div className='cardClose'><FontAwesomeIcon icon={faXmark} size="1x" /></div>
                                <h3 className='cardTitle'>My Bag</h3>
                                <div className='cardTitle'><FontAwesomeIcon icon={faBriefcase} size="1x" width="26px" height="26px" /></div>
                                <p>(5)</p>
                            </div>
                            <div className="freeShippingContainer">
                                <div className="freeShippingFade">
                                    <div className="freeShipping">
                                        <div className="freeShipingText">
                                            <p>Enjoy&nbsp;</p>
                                            <p><strong>Free&nbsp;</strong></p>
                                            <p>shipping!</p>
                                            <FontAwesomeIcon icon={faCircleCheck} size="1x" width="26px" height="26px" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <MiniCardItems />
                            <div className="keepShopping pt-3 pb-3">
                                <div className="keep">
                                    <p>Keep Shopping</p>
                                </div>
                            </div>
                            <div className="checkout">
                                <div className="total">
                                    <div className="totalLine">
                                        <span className="totalText">total:</span>
                                        <span className="totalPrice">343$</span>
                                    </div>
                                </div>
                                <div className="checkoutWrapper">
                                    <button className="checkoutBtn">Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullScreen">

                </div>
                </>
            );

}

export default BagComponent;