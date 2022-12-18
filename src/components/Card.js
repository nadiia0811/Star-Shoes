//import '../index.scss';

function Card () {
    return(
   
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
    )
}

export default Card;

