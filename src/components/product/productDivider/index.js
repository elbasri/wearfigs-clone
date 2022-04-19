/* eslint-disable @next/next/no-img-element */
const ProductDivider = ()=>{
    return(
        <div className="mt-5 divider mb-20 d-flex" >
                <div className="items d-flex flex-inline justify-content-center mt-5">
                    <div className="divider-item flex-column">
                    <img
                        src="https://images.ctfassets.net/5j6wpslh72e4/1bcTq6qRNPBHPsqoJOADa8/80ca4177536b7c3cf494f9e9015c5ba2/icon-pocket.svg"
                         alt="ridiculously soft"
                        className="WhyWeLove__Icon-sc-zvvumn-4 dTnRSd"
                        />
                        <p className="mt-2">3 Pockets</p>
                    </div>
                    <div className="divider-item item2">
                         <img
                            src="https://images.ctfassets.net/5j6wpslh72e4/BiW7KWk3KwyPSNujJXTZi/ae1fb2611eda4619745e078b30dc76ea/icon-supersoft.svg"
                             alt="ridiculously soft"
                            className="WhyWeLove__Icon-sc-zvvumn-4 dTnRSd"
                        />
                        <p className="mt-2">Ridiculously soft</p>
                    </div>
                    <div className="divider-item ">
                         <img
                            src="https://images.ctfassets.net/5j6wpslh72e4/2MVoTxGiScAvOFoGRwVSQL/c99b6a11f54ad773b19e03b1fdcf3ab1/icon-stretch-PDP.svg"
                             alt="ridiculously soft"
                            className="WhyWeLove__Icon-sc-zvvumn-4 dTnRSd"
                        />
                        <p className="mt-2">Four-way stretch</p>
                    </div>
                </div>
        </div>

    );
}

export default ProductDivider;