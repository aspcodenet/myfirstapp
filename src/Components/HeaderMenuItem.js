import React from 'react'

export const HeaderMenuItem = (props) => {
  return (
        <li>
            <a className="headeranchor" href="#">{props.menuText}</a>
        </li>
    )
}
