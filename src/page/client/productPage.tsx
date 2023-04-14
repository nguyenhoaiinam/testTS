import React from 'react'
import {Link} from 'react-router-dom'

type Props = {}

const productPage = (props: Props) => {
  return (
    <div>
        <h1>Product Page</h1>
        {
            props.products.map((data) => {
                return <div key={data.id}>
                    <h4><Link to={`/products/${data.id}`}>{data.name}</Link></h4>
                    <p>{data.price}</p>
                </div>
            })
        }
    </div>
  )
}

export default productPage