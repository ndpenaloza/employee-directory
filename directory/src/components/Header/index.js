import React from 'react';

function Header() {
    return (
        <header>
            <div className='jumbotron' style={{backgroundColor: '#939597', marginBottom: 0}}>
            <h1 style={{color: 'white' }}>Employee Directory!!</h1>
            <h4 style={{color: 'white'}}>Search! Sort!</h4>
            </div>
        </header>
    );
}

export default Header;