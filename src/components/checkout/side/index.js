
import Items from "./items";
import Options from "./options";


const Side = () => {


    return(<>
            <div className="sideCheckout" style={{
                backgroundColor: '#f5f5f5'
            }}>

                <div className="px-4 py-8 mt-4 col-7 col-xs-12" style={{
                                        maxHeight: '300px',
                                        overflowY: 'scroll'
                }}>
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                </div>
                <div className="px-4 mt-4 col-7 col-xs-12">
                    <Options/>
                </div>
                <div className="total px-4 mt-4" style={{
                        width: 'calc(100%)',
                        display:'grid',
                        gridTemplateColumns:  '25% auto 20%',
                        letterSpacing: '0.25px',
                        color: '#444444',
                        fontWeight: '500',
                        paddingBottom: '13px',
                        cursor:' pointer',
                        marginRight: '16px',
                        lineHeight: '1.43',
                        paddingRight: '16px',

                }}>
                    <div>total:</div>
                    <div>usd: <strong>300$</strong></div>
                </div>
            </div>
          </>);
}

export default Side;