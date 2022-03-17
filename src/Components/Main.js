import React from 'react'
import { Home } from './Home'
import { Products } from './Products'

export const Main = (props) => {
  return (
    <div>
        {/* { props.currentPage == 'Home' && <Home /> }
        { props.currentPage == 'Products' && <Products /> } */}

        { props.currentPage == 'Home' ? <Home /> : ''  }
        { props.currentPage == 'Products' ? <Products /> : ''  }
    </div>
  )
}
