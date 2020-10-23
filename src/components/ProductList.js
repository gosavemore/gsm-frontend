import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductList = () => {
  const { products } = useSelector((state) => state.products)

  console.log('this is the products', products)

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
