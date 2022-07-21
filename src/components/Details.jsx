import { useEffect, useState } from "react";
import {useParams }from "react-router-dom"

const Details = () => {
    const params = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
          .then((res) => res.json())
          .then((json) => setProduct(json));
      }, [params.id]);
      // const {id,title,price,description,category,image , rating} = product
  return (
    <div className="container mt-2 card text-light shadow-lg p-3 mb-5 bg-secondary rounded">
      <h1 className="text-center">{product?.title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product?.image}
                 
              className="rounded-start img-thumbnail "
              alt={product?.title}
              width={"300px"}
            />
          </div>
          <div className="col-md-8 d-flex text-dark flex-column ">
            <div className="card-body">
              <h5 className="card-title">Details</h5>
              <p className="card-text">{product?.title}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Category : " + product?.category}
              </li>
              <li className="list-group-item fs-2">
                {"Price : " + product?.price+"$"}
              </li>
              <li className="list-group-item">
                {"Rate : " + product?.rating?.rate}
              </li>
              <li className="list-group-item">
                {"Total Rating Count : " + product?.rating?.count}
              </li>
              <li className="list-group-item">
                {"Description : " + product?.description}
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
    
    
}

export default Details