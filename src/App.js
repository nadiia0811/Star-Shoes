
import { useEffect, useState } from 'react';
import Card from './components/card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import './index.scss';

/* const cards = [
  { 
    "name": "Man Sneakers Nike Blazer Mid Suede",
    "price": "129 $",
    "src": "/img/sneakers/1.jpg"
  },
  {
    "name": "Man Sneakers Nike Air Max 270",
    "price": "200 $",
    "src": "/img/sneakers/2.jpg"
  },
  {
    "name": "Man Sneakers Nike Blazer Mid Suede",
    "price": "129 $",
    "src": "/img/sneakers/3.jpg"
  },
  {
    "name": "Man Sneakers Puma X Aka Boku Future Rider",
    "price": "119 $",
    "src": "/img/sneakers/4.jpg" 
  },
  {
    "name": "Man Sneakers Мужские Under Armour Curry 8",
    "price": "119 $",
    "src": "/img/sneakers/5.jpg"
  },
  {
    "name": "Man Sneakers Nike Kyrie 7",
    "price": "129 $",
    "src": "/img/sneakers/6.jpg"
  },
  {
    "name": "Man Sneakers Jordan Air Jordan 11",
    "price": "129 $",
    "src": "/img/sneakers/7.jpg"
  },
  {
    "name": "Man Sneakers Nike Lebron XVIII Low",
    "price": "199 $",
    "src": "/img/sneakers/8.jpg"
  },
  {
    "name": "Man Sneakers Nike Blazer Mid Suede",
    "price": "129 $",
    "src": "/img/sneakers/9.jpg"
  },
  {
    "name": "Man Sneakers Nike LeBron XVIII",
    "price": "129 $",
    "src": "/img/sneakers/10.png"
  },
  {
    "name": "Man Sneakers Puma X Aka Boku Future Rider",
    "price": "199 $",
    "src": "/img/sneakers/11.png"
  },
  {
    "name": "Man Sneakers Nike Kyrie Flytrap IV",
    "price": "109 $",
    "src": "/img/sneakers/12.jpg"
  }  
] */

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
      axios.get('https://63a1cd64ba35b96522e89648.mockapi.io/items')
           .then(res => setItems(res.data));
      axios.get('https://63a1cd64ba35b96522e89648.mockapi.io/cart')
      .then(res => setCartItems(res.data));     
           
  },[]);

  const onAddToCart = (item) => { 
    if(cartItems.indexOf(item) === -1){
      axios.post('https://63a1cd64ba35b96522e89648.mockapi.io/cart', item);
      setCartItems(cartItems => [...cartItems, item]);
    }  
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63a1cd64ba35b96522e89648.mockapi.io/cart/${id}`);
    setCartItems(cartItems => cartItems.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  }
  
  return (
  <div className="wrapper clear">
    {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)}
                           cartItems={cartItems}
                           onRemoveItem={onRemoveItem}/> } 
    <Header onOpenCart={() => setCartOpened(true)} />
             
    <div className="content p-40">
      <div className='d-flex align-center mb-40 justify-between'>
          <h1>{searchValue ? `Search on request "${searchValue}"` : "All sneakers"}</h1> 
          <div className='search-block d-flex'>
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder = "Search..." 
                     onChange={onChangeSearchInput} value={searchValue}/>
            </div>
      </div>
      
      <div className='d-flex justify-between wrap'>
        {items.filter(item => item.name.toLowerCase().includes(searchValue))
              .map((item,index) => {
            const {name, price, src} = item;           
            return  <Card name={name}
                          price={price} 
                          src={src}
                          key={index}                         
                          onPlus={() => onAddToCart(item)} 
                          />
                        
                          })       
    
        } 
          
      </div>
    </div>   
</div>
  );
}

export default App;

