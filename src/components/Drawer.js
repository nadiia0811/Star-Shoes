

function Drawer() {
    return(
        <div className="drawer">
        <h2 className='mb-30 d-flex justify-between'>Cart <img src="/img/btn-remove.svg" 
                                                               alt="Close" 
                                                               className="cu-p"/>
        </h2>
        <div className="items d-flex flex-column">
            <div className="cart-item d-flex align-center mb-10">
              <img src="/img/sneakers/1.jpg" 
                  alt="sneakers"
                  className="mr-10" 
                  width={70} 
                  height={70}/>
              <div className="mr-10">
                <p className="mb-5">Man Sneakers Nike Blazer Mid Suede</p>
                <b>129 $</b>
              </div>
              <img src="/img/btn-remove.svg" 
                  alt="Remove button" 
                  className="mt-5 remove-btn"/>
            </div>

            <div className="cart-item d-flex align-center mb-10">
              <img src="/img/sneakers/5.jpg" 
                  alt="sneakers"
                  className="mr-10" 
                  width={70} 
                  height={70}/>
              <div className="mr-10">
                <p className="mb-5">Man Sneakers Puma X Aka Boku Future Rider</p>
                <b>119 $</b>
              </div>
              <img src="/img/btn-remove.svg" 
                  alt="Remove button" 
                  className="mt-5 remove-btn"/>
            </div>
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
    )
}

export default Drawer;