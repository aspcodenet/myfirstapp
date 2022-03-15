import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = ({ currentPage }) => {
  return (
    
    <header className="siteheader">
    <div className="logo">
        <i className='bx bxs-cat logoicon'></i>
        Cat<span className="logopart2">Lovers</span>                
    </div>
    <nav>
        <ul className="navmenu">
            <HeaderMenuItem currentPage={currentPage} menuText="Home"  />
            <HeaderMenuItem currentPage={currentPage} menuText="Services" />
            <HeaderMenuItem currentPage={currentPage} menuText="Products" />
            <HeaderMenuItem currentPage={currentPage} menuText="About"/>
            <HeaderMenuItem currentPage={currentPage} menuText="Contact" />
        </ul>

        
    </nav>
    <ul className="navicons">
    <li><a className="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
    <li><a className="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
    </ul>
</header>

    )
}
