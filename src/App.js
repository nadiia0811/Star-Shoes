import './index.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';


function App() {
  return (
    
<div className="wrapper clear">
    
      {/* <div className="cart-item d-flex justify-between align-center mb-20">
        <img src="img/sneakers/1.jpg" 
             width={70} height={70} alt="Sneakers" 
             className='mr-20 mb-15'/>
        <div className='mb-10'>
          <p className='mb-5'>Man Sneakers Nike Blazer Mid Suede</p>
          <b>129 $</b>
        </div>
        <div className='ml-10 mr-10'>
          <img src="img/btn-remove.svg" 
               className='remove-btn'
               alt="Remove" />
        </div>
      </div>

      <div className="cart-item d-flex justify-between align-center">
        <img src="img/sneakers/7.jpg" 
             width={70} height={70} alt="Sneakers" 
             className='mr-20 mb-15'/>
        <div className='mb-10'>
          <p className='mb-5'>Man Sneakers Nike Blazer Mid Suede</p>
          <b>129 $</b>
        </div>
        <div className='ml-10 mr-10'>
          <img src="img/btn-remove.svg" 
               className='remove-btn'
               alt="Remove" />
        </div>
      </div> */}
    
  

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

    <div className="content p-40">
      <div className='d-flex align-center mb-40 justify-between'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder = "Search..." />
            </div>
      </div>
      
      <div className='d-flex justify-between wrap'>

        <div className="card">
          <div className="favorite">
            <img src="img/heart-liked.svg" alt="Liked" />
          </div>
        
          <img src="/img/sneakers/1.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Nike Blazer Mid Suede</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>129 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <img src="img/heart-unliked.svg" alt="Liked" />
          </div>
          <img src="/img/sneakers/2.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Nike Air Max 270</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>200 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <img src="img/heart-unliked.svg" alt="Liked" />
          </div>
          <img src="/img/sneakers/3.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Nike Blazer Mid Suede</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>179 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
           <div className="favorite">
              <img src="img/heart-unliked.svg" alt="Liked" />
           </div>
          <img src="/img/sneakers/4.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Puma X Aka Boku Future Rider</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>119 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
           <div className="favorite">
              <img src="img/heart-unliked.svg" alt="Liked" />
           </div>
          <img src="/img/sneakers/5.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Puma X Aka Boku Future Rider</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>119 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
           <div className="favorite">
              <img src="img/heart-unliked.svg" alt="Liked" />
           </div>
          <img src="/img/sneakers/6.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Puma X Aka Boku Future Rider</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>119 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
           <div className="favorite">
              <img src="img/heart-unliked.svg" alt="Liked" />
           </div>
          <img src="/img/sneakers/7.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Puma X Aka Boku Future Rider</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>119 $</b>
            </div>
           <button className='button'>
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>

        <div className="card">
           <div className="favorite">
              <img src="img/heart-unliked.svg" alt="Liked" />
           </div>
          <img src="/img/sneakers/8.jpg" 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>Man Sneakers Puma X Aka Boku Future Rider</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>119 $</b>
            </div>
            <button className='button'>
                <img src="/img/plus.svg" alt="Plus button" />
            </button>
          </div>
        </div>



      </div>
    </div>
  

</div>
  );
}

export default App;

