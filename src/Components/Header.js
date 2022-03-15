import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = ({ currentPage, onChangeActivePage }) => {
  return (
    
    <header className="siteheader">
    <div className="logo">
        <i className='bx bxs-cat logoicon'></i>
        Cat<span className="logopart2">Lovers</span>                
    </div>
    <nav>
        <ul className="navmenu">
            <HeaderMenuItem onChangeActivePage={onChangeActivePage} currentPage={currentPage} menuText="Home"  />
            <HeaderMenuItem onChangeActivePage={onChangeActivePage} currentPage={currentPage} menuText="Services" />
            <HeaderMenuItem  onChangeActivePage={onChangeActivePage} currentPage={currentPage} menuText="Products" />
            <HeaderMenuItem onChangeActivePage={onChangeActivePage} currentPage={currentPage} menuText="About"/>
            <HeaderMenuItem onChangeActivePage={onChangeActivePage} currentPage={currentPage} menuText="Contact" />
        </ul>

        
    </nav>
    <ul className="navicons">
    <li><a className="navanchor" href="#"><i className='bx bx-search-alt navicon'></i></a></li> 
    <li><a className="navanchor" href="#"><i className='bx bx-menu navicon' ></i></a></li> 
    </ul>
</header>

    )
}
