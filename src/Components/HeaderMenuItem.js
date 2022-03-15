import React from 'react'

export const HeaderMenuItem = (props) => {
  return (   // (a > 12 ? 'Hej' : 'Hopp')
        <li>
            <a className={`headeranchor ${props.currentPage == props.menuText ? 'active' : ''}`}
            href="#">{props.menuText}</a>
        </li>
    )
}
