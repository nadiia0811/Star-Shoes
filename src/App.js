import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';


const cards = [
  { 
    name: "Man Sneakers Nike Blazer Mid Suede",
    price: "129 $",
    src: "/img/sneakers/1.jpg"
  },
  {
    name: "Man Sneakers Nike Air Max 270",
    price: "200 $",
    src: "/img/sneakers/2.jpg"
  },
  {
    name: "Man Sneakers Nike Blazer Mid Suede",
    price: "129 $",
    src: "/img/sneakers/3.jpg"
  },
  {
    name: "Man Sneakers Puma X Aka Boku Future Rider",
    price: "119 $",
    src: "/img/sneakers/4.jpg" 
  },
  {
    name: "Man Sneakers Мужские Under Armour Curry 8",
    price: "119 $",
    src: "/img/sneakers/5.jpg"
  },
  {
    name: "Man Sneakers Nike Kyrie 7",
    price: "129 $",
    src: "/img/sneakers/6.jpg"
  },
  {
    name: "Man Sneakers Jordan Air Jordan 11",
    price: "129 $",
    src: "/img/sneakers/7.jpg"
  },
  {
    name: "Man Sneakers Nike LeBron XVIII",
    price: "129 $",
    src: "/img/sneakers/8.jpg"
  }  
]

function App() {
  return (
    
<div className="wrapper clear">
    <Drawer />
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
         {cards.map((item,index) => {
           const {name, price, src} = item;           
           return  <Card name={name}
                         price={price}
                         src={src}
                         key={index} />        
         
           })
          } 
      </div>
    </div>   
</div>
  );
}

export default App;

