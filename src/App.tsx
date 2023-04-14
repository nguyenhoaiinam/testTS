import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './page/client/homePage'
import ProductPage from './page/client/productPage'
import ProductDetailPage from './page/client/productDetailPage'
import Login from './page/client/login'
import Signup from './page/client/signup'
import ProductManagement from './page/admin/productManagement'
import AddProduct from './page/admin/addProduct'
import UpdateProduct from './page/admin/updateProduct'
import {updateProduct, getAll, removeProduct, addProduct} from './api/product'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((respone) => respone.json())
      .then(data => setProducts(data))
  },[])

  const onHandleRemove = (id) => {
    fetch(`http://localhost:3000/products/${id}`,{
      method: "DELETE"
    }).then(() => {
      const newProducts = products.filter((item) => item.id !== id)
      setProducts([...newProducts])
    })
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => getAll().then(({data}) => setProducts(data)))
  }
  const onHandleAdd = (product) => {
    addProduct(product).then(() => getAll().then(({data}) => setProducts(data)))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage products={products}/>} />
          <Route path='/products/:id' element={<ProductDetailPage products={products}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/products' element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
          <Route path='/admin/products/add' element={<AddProduct onAdd={onHandleAdd} />} />
          <Route path='/admin/products/:id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
