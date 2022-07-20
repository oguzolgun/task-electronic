
import {useNavigate} from "react-router-dom"


const Product = ({item}) => {
    const navigate = useNavigate()
    
  return (
          
          <div className="card text-light  bg-secondary rounded h-100 border-dark mb-3 shadow p-3 mb-6" style={{width: "18rem"}}>
            
            <img src={item.image} className="card-img-top img-thumbnail mw-50" alt={item.image}  />
           
            <div className="card-body ">
              <h5 className="card-title"> {item.title}</h5>
            </div>
              <h5 className="card-title"> Price: {item.price} $</h5>
              <button className="btn btn-warning" onClick={()=>navigate(`/details/${item.id}`)}>Details</button>
            
        </div>    
  
  )
}

export default Product