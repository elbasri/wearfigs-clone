/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link'

const SignUp = () => {
        return(<>
            <div className="row" style={{margin: '0'}}>
                <div
                 className="col-xs-12 col-md-6 d-flex imageRight"
                 >
                    <img
                        src={'https://wearfigs-back.tasyer.com/wp-content/uploads/2022/04/login-600x600-v2-1.webp'}
                        alt="login page for figs wear"
                        width={'461'}
                        height={'461'}

                    />
                </div>
                <div
                     className="col-xs-12 col-md-6"
                     style={{
                         display: 'block'
                     }}
                >
                    <div className="d-flex col-xs-12 col-md-6" style={{ flexDirection: 'column' }}>
                        <h2 style={{
                            textAlign: 'center',
                            fontSize: '28px',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            lineHeight:' 36px',
                        }}>Create your FIGS account</h2>
                        <span style={{
                            textAlign: 'center',
                            fontSize: '13px',
                            fontWeight: '400',
                            letterSpacing: '0.6px',
                            lineHeight: '20px',
                            fontFamily:' Figs, Raleway, sans-serif'
                        }}> C&apos;mon, everybody&apos;s doing it. Create an account to apply discount codes at checkout and get access to exclusive offers and promotions.</span>
                    </div>

                        <br/>
                        <input
                            type="text"
                            className='col-xs-12 col-md-6 my-2'
                            style={{
                                background: 'rgb(245, 245, 245)',
                                boxSizing: 'border-box',
                                color: 'rgb(40, 40, 40)',
                                fontFamily: 'Figs, Raleway, sans-serif',
                                fontSize: '13px',
                                fontWeight: '600',
                                height: '48px',
                                lineHeight: 1,
                                padding: '16px 12px 16px 20px'
                            }}
                            placeholder="First Name"
                        />
                        <br/>
                        <input
                            type="text"
                            className='col-xs-12 col-md-6 my-2'
                            style={{
                                background: 'rgb(245, 245, 245)',
                                boxSizing: 'border-box',
                                color: 'rgb(40, 40, 40)',
                                fontFamily: 'Figs, Raleway, sans-serif',
                                fontSize: '13px',
                                fontWeight: '600',
                                height: '48px',
                                lineHeight: 1,
                                padding: '16px 12px 16px 20px'
                            }}
                            placeholder="Family Name"
                        />
                        <br/>
                        <input
                            type="email"
                            className='col-xs-12 col-md-6 my-2'
                            style={{
                                background: 'rgb(245, 245, 245)',
                                boxSizing: 'border-box',
                                color: 'rgb(40, 40, 40)',
                                fontFamily: 'Figs, Raleway, sans-serif',
                                fontSize: '13px',
                                fontWeight: '600',
                                height: '48px',
                                lineHeight: 1,
                                padding: '16px 12px 16px 20px'
                            }}
                            placeholder="Email"
                        />
                        <br/>
                        <input
                            style={{
                                background: 'rgb(245, 245, 245)',
                                boxSizing: 'border-box',
                                color: 'rgb(40, 40, 40)',
                                fontFamily: 'Figs, Raleway, sans-serif',
                                fontSize: '13px',
                                fontWeight: '600',
                                height: '48px',
                                lineHeight: 1,
                                padding: '16px 12px 16px 20px'
                            }}
                         placeholder="password"
                         type="password"
                         className='col-xs-12 col-md-6'/>
                        <div className='d-flex col-xs-12 col-md-6 my-3'>
                            <input style={{
                                cursor: 'pointer',
                                color: 'rgb(102, 102, 102)',
                                fontSize: '11px',
                                lineHeight: '1.3',
                                width: 'calc(20%)'
                            }}
                                type='checkbox'
                            />
                            <p
                                style={{
                                    cursor: 'pointer',
                                    color: 'rgb(102, 102, 102)',
                                    fontSize: '11px',
                                    lineHeight: '1.3',
                                    textAlign: 'start',
                                    width: 'calc(80%)'
                                }}
                            >Yes, I would like to receive emails from FIGS about products, updates,
                             and exclusive offers and promotions. You can unsubscribe at any time.
                              See our Privacy Policy.</p>
                        </div>
                        <button className='btn btn-dark btn-lg col-xs-12 col-md-6'>Sign Up</button>
                        <p      className='my-3'
                                style={{
                                    cursor: 'pointer',
                                    color: 'rgb(102, 102, 102)',
                                    fontSize: '11px',
                                    lineHeight: '1.3',
                                    textAlign: 'center',
                                    width: 'calc(50%)'
                                }}
                            >By clicking the button above, you agree to our Terms of Use and Privacy Policy.</p>
                        <div
                            className='col-xs-12 col-md-6 my-5'
                            style={{
                                borderTop : 'solid 1px #707070'
                            }}
                        ></div>
                        <div className="d-flex my-3  col-xs-12 col-md-6" style={{
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <p
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    lineHeight: '23px',
                                    textAlign: 'center'
                                }}
                            >Have an account?
                            </p>
                            <Link href={'/user/login'}>
                            <a
                            style={{
                                color: '#707070',
                                fontSize: '12px',
                                letterSpacing: '1px',
                                textAlign: 'center'
                            }}
                            > Login
                            </a>
                            </Link>
                        </div>
                </div>
            </div>
               </>);
}

export default SignUp;