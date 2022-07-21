
import {useNavigate} from "react-router-dom"


const Product = ({item}) => {
    const navigate = useNavigate()
    
  return (
    
          <div className="card text-light  bg-secondary rounded h-100 border-dark mb-3 shadow-lg p-3 mb-6" style={{width: "18rem"}}>
            <img 
            src={item.image} 
            className="card-img-top img-fluid mh-50 " 
            alt={item.image}
            style={{ height: "200px" }}/>
              
            <div className="card-body ">
              <h5 className="card-title fw-light"> {item.title}</h5>
            </div>
              <h5 className="card-title fw-bold"> Price: {item.price} $</h5>
              <button className="btn btn-warning" onClick={()=>navigate(`/details/${item.id}`)}>Details</button>
           
          </div>  
  )
}

export default Product