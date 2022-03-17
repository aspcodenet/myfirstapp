import React from 'react'

export const Product = (props) => {
  return (
    <div class="productgallery_card">
        <div class="productgallery_card_container">
            <img src={props.product.image} alt="cookies" class="hero-image"/>
            <div class="information">

                <div class="name">{props.product.title}</div>

                <div class="store">{props.product.category}</div>

                <a href="#" class="storebutton">Purchase Product</a>

            </div>
        </div>
    </div>
)
}
