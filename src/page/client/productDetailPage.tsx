import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

type Props = {}

const productDetailPage = (props: Props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(props.products.find(product => product.id == id))
    })
  return (
    <div>
        <h1>Product Details Page</h1>
        <h3>Product Name: {product.name}</h3>
        <p>Product Price: {product.price}</p>
    </div>
  )
}

export default productDetailPage