import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductList = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <div>
      <h3 class='center-align blue-text text-darken-2'>Top Selling Products</h3>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
export default ProductList
