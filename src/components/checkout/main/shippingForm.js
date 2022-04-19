

const ShippingForm = () => {
    return(<>
            <div
                className="information py-4 px-4 my-3"
                style={{
                    border:' solid 1px gray',
                    borderRadius: '5px'
                }}
            >
                <div className="mb-4" style={{display:'grid', gridTemplateColumns:  '25% auto 10%', borderBottom: '1px gray solid'}}>
                    <div
                        className="mb-3"
                        style={{
                            color: '#737373',
                            paddingRight: '1.1428571429em'

                        }}
                    >Contact</div>
                    <div  className="mb-3" style={{
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                        lineWeight: '1.3em',
                        overflowWrap: 'break-word',
                        wordWrap: 'break-word',
                        wordBreak: 'break-word',
                         }}>Email.lol</div>
                    <div  className="mb-3"  style={{
                            fontSize: '14px',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                            lineWeight: '1.3em',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                         }}>change</div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:  '25% auto 10%'}}>
                    <div
                        style={{
                            color: '#737373',
                            paddingRight: '1.1428571429em'

                        }}
                    >Ship to</div>
                    <div   style={{
                            fontSize: '14px',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                            lineWeight: '1.3em',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                         }}>adresss</div>
                    <div   style={{
                            fontSize: '14px',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                            lineWeight: '1.3em',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                         }}>change</div>
                </div>
            </div>
           </>);
}

export default ShippingForm;