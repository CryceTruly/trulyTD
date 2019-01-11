import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to='/'>Home</Link>
 |
 
 <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle={
    backgroundColor:'#000000',
    padding:'10px',
    color:'#fff'

}

export default Header