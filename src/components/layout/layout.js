import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle={
    backgroundColor:'#000000',
    padding:'10px',
    color:'#fff'

}

export default Header