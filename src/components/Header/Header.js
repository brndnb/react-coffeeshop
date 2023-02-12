import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header-container">
        <div>
            <h1><a href="/">Brew Nation</a></h1>
        </div>
        <div>
            <a href="/hot">Hot Recipes</a>
            <a href="/cold">Cold Recipes</a>
        </div>
    </div>
  )
}

export default Header