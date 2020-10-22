import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductList = () => {
  const products = useSelector((state) => state.products.products)
  console.log('produts', products)

  // products.map(product => {

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
export default ProductList
