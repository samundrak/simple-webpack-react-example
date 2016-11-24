import React from 'react';
import ReactDOM from 'react-dom';
import {shout} from './utils';
const $ = require('jquery');
class Contact extends React.Component {

    molested() {
        $("#target").hide();
        shout();
    }

    render() {
        return (
            <div onClick={this.molested}> I am contact page</div>
        );
    }
}

ReactDOM.render(<Contact/>, document.getElementById('target'));