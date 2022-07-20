
import {useNavigate} from "react-router-dom"

const Product = ({item}) => {
    const navigate = useNavigate()
    
  return (
    
    <div className="card" style={{width: "18rem"}}>
    <img src={item.image} className="card-img-top" alt={item.img}/>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      
      <button className="btn btn-primary" onClick={()=>navigate(`/details/${item.id}`)}>Details</button>
    </div>
  </div>
  
  )
}

export default Product