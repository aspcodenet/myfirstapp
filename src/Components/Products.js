import React from 'react'
import { Product } from './Product'
import { products } from './Data/ProductData'
import {fetchProducts} from './Data/ProductData'
import { useState,useEffect } from 'react'

export const Products = () => {

   const [products, setProducts] = useState([]);    



   useEffect(() =>{
    const fetchData = async()=>{
      const result = await fetchProducts()
      setProducts(result)
    }
    fetchData()
  }, [])   

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
