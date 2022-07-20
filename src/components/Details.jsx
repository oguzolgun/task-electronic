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
  return (
    <div>{product.title}</div>
  )
}

export default Details