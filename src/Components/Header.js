import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = () => {
  return (

    <header className="siteheader">
    <div className="logo">
        <i className='bx bxs-cat logoicon'></i>
        Cat<span className="logopart2">Lovers</span>                
    </div>
    <nav>
        <ul className="navmenu">
            <HeaderMenuItem menuText="Home"  />
            <HeaderMenuItem menuText="Services" />
            <HeaderMenuItem menuText="Products" />
            <HeaderMenuItem menuText="About"/>
            <HeaderMenuItem menuText="Contact" />
        </ul>

        
    </nav>
    <ul className="navicons">
    <li><a className="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
    <li><a className="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
    </ul>
</header>

    )
}
