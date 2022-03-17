import React from 'react'
import { Product } from './Product'

export const Products = () => {
  return (
    
    <section class="products" id="products">
    <h1 class="heading"> <span>our</span> products </h1>

    <div class="productgallery">
        <Product />
        <Product />
        <Product />
        <Product />
    </div>

</section>



  )
}
