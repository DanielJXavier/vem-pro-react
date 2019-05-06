import React from 'react';
import logo from './logo.svg';
import './Logo.css';

const Logo = (props) => {
    let items = []

    for (let i = 0; i < props.repeat; i++) {
        items.push(<img key={i} src={logo} className="App-logo" alt="logo" />)
    }

  return (
        <div>
            {items}
        </div>
    )
};

export default Logo;
