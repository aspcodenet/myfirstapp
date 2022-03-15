import React from 'react'

export const HeaderMenuItem = (props) => {

  const IWasClicked = ()=>{
      props.onChangeActivePage(props.menuText)
  }  

  return (   // (a > 12 ? 'Hej' : 'Hopp')
        <li>
            <a 
                onClick={IWasClicked}
                className={`headeranchor ${props.currentPage == props.menuText ? 'active' : ''}`}
                href="#">
                    {props.menuText}
            </a>
        </li>
    )
}
