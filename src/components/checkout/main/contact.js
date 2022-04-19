


const Contact = () => {
    return(<>
            <div className="d-flex" style={{
                gap: '10rem'
            }}>
                <div>
                <h2
                    style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                        fontSize: '1.2857142857em',
                        lineHeight: '1.3em'
                    }}
                >Contact information</h2>
                </div>
                <div className="d-flex " style={{gap : '4px'}}>
                    <p
                       style={{
                        color: '#707070',
                        fontSize: '12px',
                        letterSpacing: '1px',
                        textAlign: 'center',
                        lineHeight: '2.5em'
                       }}
                    >Already have an account?</p>
                    <span
                        className="ml-2"
                       style={{
                        color: '#545454',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        textAlign: 'center',
                        lineHeight: '2.5em'
                       }}
                    >Log in</span>
                </div>
            </div>
            <div className="my-2">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                <div className="d-flex my-2">
                    <input type="checkbox" className="mx-1"/>
                    <label style={{
                            fontSize: '14px',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                            lineHeight: '1.3em',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                            '-webkit-font-smoothing': 'subpixel-antialiased',
                            '-moz-font-smoothing': 'subpixel-antialiased',
                    }}>Yes, I would like to receive emails from FIGS about products, updates, and exclusive offers and promotions. You can unsubscribe at any time.</label>
                </div>
            </div>
           </>);
}

export default Contact;