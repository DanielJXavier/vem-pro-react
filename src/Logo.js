// Core
import React from 'react';

// Assets
import logo from './logo.svg';

// Styles
import './Logo.css';

const Logo = (props) => {
    let items = []

    for (let i = 0; i < props.repeat && i < 6; i++) {
        items.push(<img key={i} src={logo} className="App-logo" alt="logo" />)
    }

    return (
        <div>
            {items}
        </div>
    )
};

export default Logo;
