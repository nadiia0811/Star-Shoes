 import "./Card.scss"; 

function Card (props) {
  const {name, price, src} = props;
    return (

        <div className="card">
          <div className="favorite">
            <img src="img/heart-unliked.svg" alt="Liked" />
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
           <button className="button">
              <img src="/img/plus.svg" alt="Plus button" />
           </button>
          </div>
        </div>
    )
}

export default Card;

