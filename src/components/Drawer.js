function Drawer(props) {  
    const {onCloseCart, cartItems, onRemoveItem} = props;
    return (
        <div className="overlay" >    
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>Cart <img src="/img/btn-remove.svg" 
                                                                       alt="Close cart" 
                                                                       className="cu-p"
                                                                       onClick={onCloseCart}
                                                                       />
                </h2>
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
                    
                </div>

                <div className="sum d-flex justify-between mt-50 mb-25">
                    <span>Sum:</span>
                    <b>248 $</b>
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