import './index.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';

function App() {
  return (
    
<div className='wrapper clear'>
    <header className='d-flex justify-between p-40'>
      <div className='d-flex align-center'> 
        <img src = "/img/logo.png" width = {40} height = {40} alt = "logo"/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React sneakers</h3>
            <p>The shop of the best sneakers</p>
          </div>
      </div>

      <ul className='d-flex justify-between align-center'>
        <li className='mr-30'>
        <FaShoppingCart className='icon icon-cart mr-10'/>
          <span>1205 r</span>
        </li>
        <li>
          <AiOutlineHeart className='icon icon-heart mr-10'/>
        </li>
        <li>
          <BiUserCircle className='icon icon-user mr-10'/>
        </li>
      </ul>
    </header>

    <div className="content p-40">
      <h1>All sneakers</h1>
      <div>
        
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
    </div>


</div>
  );
}

export default App;

