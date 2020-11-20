import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Check2Square } from 'react-bootstrap-icons';
import Message from './Message';

class MessagePage extends Component {

    render() {
        return (
            <div>
                <Message message={this.props.message} details={this.props.details} />
                <Link to="/">
                    <Button className="fixed-bottom m-4" variant="link">
                        <Check2Square size="32" />
                    </Button>
                </Link>
            </div>
        );
    }

}

export default MessagePage;