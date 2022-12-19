import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';



function App() {
  return (
    
<div className="wrapper clear">
    <div className="overlay" style={{display: 'none'}}>
      <Drawer />
    </div>
    <Header />

    <div className="content p-40">
      <div className='d-flex align-center mb-40 justify-between'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder = "Search..." />
            </div>
      </div>
      
      <div className='d-flex justify-between wrap'>
        <Card />

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

