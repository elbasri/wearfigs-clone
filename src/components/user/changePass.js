/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const changePassWord = () => {
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
                    }}>Reset your password</h2>
                    <span style={{
                        textAlign: 'center',
                        fontSize: '13px',
                        fontWeight: '400',
                        letterSpacing: '0.6px',
                        lineHeight: '20px',
                        fontFamily:' Figs, Raleway, sans-serif'
                    }}>Enter your email below and we will email you instructions to reset your password within a few minutes!</span>
                </div>

                    <br/>
                    <input
                        type="email"
                        placeholder='Email'
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
                    />
                    <br/>


                    <button className='btn btn-dark btn-lg col-xs-12 col-md-6'>Submit</button>
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

                        <Link href={'/user/login'}>
                        <a
                        style={{
                            color: '#707070',
                            fontSize: '12px',
                            letterSpacing: '1px',
                            textAlign: 'center'
                        }}
                        > Cancel
                        </a>
                        </Link>
                    </div>
            </div>
        </div>
           </>);
}

export default changePassWord;