import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';


function Header(props) {
 const {onOpenCart} = props;
    return(
        <header className='d-flex justify-between p-40 '>
            <div className='d-flex align-center'> 
              <img src = "/img/logo.png" width = {40} height = {40} alt = "logo"/>
              <div className='headerInfo'>
                <h3 className='text-uppercase'>React sneakers</h3>
                <p>The shop of the best sneakers</p>
              </div>
            </div>
  
            <ul className='d-flex justify-between align-center'>
                <li className='mr-30'>
                  <FaShoppingCart className='icon icon-cart mr-10 cu-p'
                                  onClick={onOpenCart}/>
                  <span>1205 $</span>
                </li>
                <li>
                  <AiOutlineHeart className='icon icon-heart mr-10'/>
                </li>
                <li>
                  <BiUserCircle className='icon icon-user mr-10'/>
                </li>
            </ul>
      </header>
    )
}

export default Header;