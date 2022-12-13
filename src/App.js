import './index.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';

function App() {
  return (
    
<div className='wrapper'>
    <header>
      <div className='headerLeft'> 
        <img src = "/img/logo.png" width = {40} height = {40} alt = "logo"/>
          <div className='headerInfo'>
            <h3>React sneakers</h3>
            <p>The shop of the best sneakers</p>
          </div>
    </div>

      <ul className='headerRight'>
        <li>
        <FaShoppingCart className='icon icon-cart'/>
          <span>1205 r</span>
        </li>
        <li>
          <AiOutlineHeart className='icon icon-heart'/>
        </li>
        <li>
          <BiUserCircle className='icon icon-user'/>
        </li>
      </ul>
    </header>

    <div className="content">
      <h1>All sneakers</h1>
      .....
    </div>


</div>
  );
}

export default App;

