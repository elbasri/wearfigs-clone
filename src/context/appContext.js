import { useState, useEffect, useContext } from 'react'

const CartContext = React.createContext([
    {},
    () => {

    }
]);

const AppProvider = (props) => {
    const [cart, setCart] = useState(null);
    useEffect(()=>{
        if(process.browser){
            localStorage.setItem('woo-cart',JSON.stringify(cart));
        }
    },[cart]);

    return (
        <CartContext.AppProvider value={[cart,setCart]} >
                {props.children}
        </CartContext.AppProvider>
         );

}

export default AppProvider;