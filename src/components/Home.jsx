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
    <div>
        {products.map((item,index) => {
        return <Product key={index} item={item}/> 
        })}
    </div>
  )
}

export default Home