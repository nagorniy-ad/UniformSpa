import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <div>
                <h1 className="text-center p-4 display-4">{this.props.message}</h1>
                <h2>{this.props.details}</h2>
            </div>
        );
    }

}

export default Message;