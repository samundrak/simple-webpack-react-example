import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {shout} from './utils';

class Message extends React.Component {

    touchedMe() {
        shout();
    }

    render() {
        return (
            <div>
                <p>Hello's This is testing</p>
                <p> i am prop {this.props.name}</p>
                <button onClick={this.touchedMe}>Touch me</button>
            </div>
        );
    }
}

ReactDOM.render(<Message name="samundra"/>, document.getElementById('target'));