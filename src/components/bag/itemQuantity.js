import {useState} from 'react';


const ItemQuantity = () => {

    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (e) => {
        if(e === 'increment') {
            setQuantity(++quantity)
        }else {
            if(quantity > 1)
                setQuantity(--quantity)
        }

    }

    return(<div className='quantitySection'>
                <button className='quantityButton' onClick={()=>quantityHandler('increment')}>+</button>
                <input type="number" /* value={quantity} defaultValue={1} onChange={()=>{}} *//>
                <button className='quantityButton' onClick={()=>quantityHandler('decrease')}>-</button>
           </div>)

}

export default ItemQuantity;