import { useEffect, useState } from "react";

import Product from "./Product";

const Home = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((json) => setProducts(json));
}, []);
    console.log(products);
  return (
    <div >
      <div className="container-lg mt-1 text-warning">
        <h1 style={{textAlign: "center", background:"#6C757D"}}>PRODUCTS</h1>
        <div className="row g-4 py-5 ">
           {products.map((item,index) => {
        return <div className="col-sm-12 col-md-6 col-lg-4">
                <Product key={index} item={item} /> 
               </div>
        })}
        </div>
    </div>
    </div>
  )
}

export default Home