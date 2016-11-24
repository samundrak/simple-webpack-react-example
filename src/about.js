import React from 'react';
import ReactDOM from 'react-dom';
import {shout} from './utils';

class About extends React.Component {

    harassed() {
        shout();
    }

    render() {
        return (
            <div onClick={this.harassed}> I am About page</div>
        );
    }
}

ReactDOM.render(<About/>, document.getElementById('target'));