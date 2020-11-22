import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
                <div className="w-50 h-75">
                    <h1 className={`display-4 p-4 mb-4 alert alert-${this.props.type}`}>
                        {this.props.title}
                    </h1>
                    <p className="lead mb-4">
                        {this.props.message}
                    </p>
                    <div className="list-group list-group-flush">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

export default Message;