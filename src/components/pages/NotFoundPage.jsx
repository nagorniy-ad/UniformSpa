import React from 'react';
import Message from '../Message'
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {

    render() {
        return (
            <Message title="Упс" message="Такой страницы нет." type="warning">
                <Link to="/" className="list-group-item list-group-item-action" style={{ cursor: "pointer" }}>На главную</Link>
            </Message>
        );
    }

}

export default NotFoundPage;