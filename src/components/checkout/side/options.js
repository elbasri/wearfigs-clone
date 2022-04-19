import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGift,
    faGraduationCap,
  } from "@fortawesome/free-solid-svg-icons";

const Options = () => {
    const [dgift,setDGift] = useState(false);
    const [dgiftCard,setDGiftCard] = useState(false);

    return(<>
                <div className='p-4  col-xs-12 col-12'>
                    <div className="head d-flex" style={{
                            display: 'block',
                            letterSpacing: '0.25px',
                            color: '#444444',
                            fontWeight: '500',
                            paddingBottom: '13px',
                            paddingTop: '13px',
                            cursor:' pointer',
                            marginRight: '16px',
                            lineHeight: '1.43',
                            paddingRight: '16px',
                            gap: '1rem'

                    }}
                         onClick={()=> setDGift(!dgift) }
                    >
                        <FontAwesomeIcon icon={faGift} size="1x"  />
                        <p>Make it gift ?</p>
                    </div>
                    <div className="content my-2" style={{display: dgift ? 'block': 'none' ,}}>
                        <div className="title" style={{

                            letterSpacing: '0.25px',
                            color: '#444444',
                            fontWeight: '500',
                            paddingBottom: '13px',
                            paddingTop: '13px',
                            cursor:' pointer',
                            marginRight: '16px',
                            lineHeight: '1.43',
                            paddingRight: '16px',
                            textAlign: 'center'
                        }}

                        >Add a Gift Message + Box.</div>
                        <div className="row">
                            <div className="col-6 col-xs-12">
                                <input type="text" className="form-control" placeholder="From" aria-label="First name"/>
                            </div>
                            <div className="col-6 col-xs-12">
                                <input type="text" className="form-control" placeholder="To" aria-label="Last name"/>
                            </div>

                        </div>
                        <div className="my-3 col-12 col-xs-12">
                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-dark'>Gift Figs</button>
                    </div>

                    <div style={{borderTop: 'solid 1px black'}}></div>

                    <div className="head d-flex"  style={{
                            display: 'block',
                            letterSpacing: '0.25px',
                            color: '#444444',
                            fontWeight: '500',
                            paddingBottom: '13px',
                            paddingTop: '13px',
                            cursor:' pointer',
                            marginRight: '16px',
                            lineHeight: '1.43',
                            paddingRight: '16px',
                            gap: '1rem'

                    }}>
                        <FontAwesomeIcon icon={faGraduationCap} size="1x" />
                        <p>Student and military save 20% </p>
                    </div>
                    <div className="content my-2"></div>

                    <div style={{borderTop: 'solid 1px black'}}></div>

                    <div className="head d-flex"

                     style={{

                        letterSpacing: '0.25px',
                        color: '#444444',
                        fontWeight: '500',
                        paddingBottom: '13px',
                        paddingTop: '13px',
                        cursor:' pointer',
                        marginRight: '16px',
                        lineHeight: '1.43',
                        paddingRight: '16px',
                        gap: '1rem'

                }}
                onClick={()=> setDGiftCard(!dgiftCard)}
                >
                        <FontAwesomeIcon icon={faGift} size="1x" />
                        <p>Gift card discount</p>
                    </div>
                    <div className="content my-2" style={{display: dgiftCard ? 'block': 'none'}}>
                        <p style={{
                            letterSpacing: '0.25px',
                            color: '#444444',
                            fontWeight: '500',
                            paddingBottom: '13px',
                            cursor:' pointer',
                            marginRight: '16px',
                            lineHeight: '1.43',
                            paddingRight: '16px'
                        }}>Gift Card or Discount Code

                            Discount codes cannot be stacked, including Student and Military discounts.</p>
                            <div className="row">
                                <div className="col-8 col-xs-8">
                                    <input type="text" className="form-control" placeholder="Gift Card" />
                                </div>
                                <button className='btn btn-dark col-3'>Apply</button>
                            </div>
                    </div>
                    <div style={{borderTop: 'solid 1px black'}}></div>
                </div>
            </>)
}

export default Options;