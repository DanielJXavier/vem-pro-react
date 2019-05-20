// Core
import React, { Component } from 'react';

// Assets
import logo from './logo.svg';

// Styles
import './Logo.scss';

class Logo extends Component {
    state = {
        repeat: 1
    }

    render() {
        const { repeat } = this.state

        let items = []

        for (let i = 0; i < repeat; i++) {
            items.push(<img key={i} src={logo} className="App-logo" alt="logo" />)
        }

        return (
            <div>
                <div className="App-logo-content">{items}</div>
                <div className="App-logo-header">
                    <button
                        disabled={repeat >= 6}
                        onClick={() => this.setState((() => ({ repeat: repeat + 1 })))}
                    >
                        Add Logo
                    </button>
                    <button
                        disabled={repeat <= 1}
                        onClick={() => this.setState((({ repeat }) => ({ repeat: repeat - 1 })))}
                    >
                        Remove Logo
                    </button>
                </div>
            </div >
        )
    }
};

Logo.defaultProps = {
    repeat: 1
}

export default Logo;
