import React from 'react'
import { Product } from './Product'
import { products } from './Data/ProductData'

export const Products = () => {

  return (

    
    <section class="products" id="products">
    <h1 class="heading"> <span>our</span> products </h1>

    <div class="productgallery">
        {products.map((p)=>  <Product product={p} />   )  }
        {/* <Product product={produkten} /> */}
    </div>

</section>



  )
}
