 import "./Card.scss";
 import { useState } from "react"; 

function Card (props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const {name, price, src, onPlus} = props;

  const onClickPlus = () =>{
    onPlus();
    setIsAdded(!isAdded); 
  }

  const onClickFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  }
  
    return (

        <div className="card">
          <div className="favorite" onClick={onClickFavorite}>
            <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="Liked" />
          </div>       
          <img src={src} 
               alt="Sneakers" 
               width={133}
               height={112}/>
          <p>{name}</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price}</b>
            </div>
           <button className="button"
                   onClick={onClickPlus}> 
              <img src={isAdded ? "/img/green-btn.svg" : "/img/plus.svg"} alt="Plus button" />
           </button>
          </div>
        </div>
    )
}

export default Card;

