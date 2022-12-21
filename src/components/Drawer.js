import {FaLongArrowAltLeft} from 'react-icons/fa';

function Drawer(props) {  
    const {onCloseCart, cartItems, onRemoveItem} = props;
    
    let res = 0;
    const sum = () => {
        cartItems.forEach(item => {
            let price = +item.price.replace(/\D/g,'');
            res += price;
        })
        return res;
    }
    return (
        <div className="overlay" >    
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>Cart <img src="/img/btn-remove.svg" 
                                                                       alt="Close cart" 
                                                                       className="cu-p"
                                                                       onClick={onCloseCart}
                                                                       />
                </h2>
                {cartItems.length > 0 ? <div className="items d-flex flex-column">
                    {cartItems.map((item, index) => {
                        const {name, price, src} = item;
                        return  <div className="cart-item d-flex align-center mb-10" key={index}>
                                  <img src={src} 
                                       alt="sneakers"
                                       className="mr-10" 
                                       width={70} 
                                       height={70}/>
                                  <div className="mr-10">
                                    <p className="mb-5">{name}</p>
                                    <b>{price}</b>
                                  </div>
                                  <img src="/img/btn-remove.svg" 
                                       alt="Remove button" 
                                       className="mt-5 remove-btn"
                                       onClick={() => onRemoveItem(item.id)}/>  
                                </div>
                  })}
                  </div>
                    
                 :  <div className="d-flex align-center justify-center flex-column flex">
                    <img src="/img/empty-cart.jpg" alt="Empty cart"
                         width={120} height={120} className="mb-10"/>
                    <h2>The cart is empty!</h2> 
                    <p className="opacity-6">Add minimum 1 product to make order</p>    
                    <button className="green-button d-flex align-center"
                            onClick={onCloseCart}>
                        <FaLongArrowAltLeft className="mr-10"/> Back
                    </button>     
                </div>}
                {/* <div className="d-flex align-center justify-center flex-column flex">
                    <img src="/img/empty-cart.jpg" alt="Empty cart"
                         width={120} height={120} className="mb-10"/>
                    <h2>The cart is empty!</h2> 
                    <p className="opacity-6">Add minimum 1 product to make order</p>    
                    <button className="green-button">
                        <FaLongArrowAltLeft/> Back
                    </button>     
                </div>
                <div className="items d-flex flex-column">
                    {cartItems.map((item, index) => {
                        const {name, price, src} = item;
                        return  <div className="cart-item d-flex align-center mb-10" key={index}>
                                  <img src={src} 
                                       alt="sneakers"
                                       className="mr-10" 
                                       width={70} 
                                       height={70}/>
                                  <div className="mr-10">
                                    <p className="mb-5">{name}</p>
                                    <b>{price}</b>
                                  </div>
                                  <img src="/img/btn-remove.svg" 
                                       alt="Remove button" 
                                       className="mt-5 remove-btn"
                                       onClick={() => onRemoveItem(item.id)}/>  
                                </div>
                  })}
                    
                </div> */}

                <div className="sum d-flex justify-between mt-50 mb-25">
                    <span>Sum:</span>
                    <b> {sum()} $</b>
                </div>

                <div className="order-btn d-flex justify-between">
                    <span>Order</span>
                    <img src="/img/arrow.svg" 
                         alt="Arrow" />                
                </div>
            </div>
        </div>   
    )
}

export default Drawer;