import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import Form from '../form/Form';
import Message from '../Message';

class FormPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.resetResult = this.resetResult.bind(this);
    }

    handleOnSubmit(result) {
        if (result) {
            this.setState({ result });
        }
    }

    resetResult() {
        this.setState({ result: null });
    }

    renderSuccess() {
        return (
            <Message title="Ура!" message="Форма успешно отправлена" type="success">
                <a className="list-group-item list-group-item-action" style={{ cursor: "pointer" }} onClick={this.resetResult}>Заполнить новую</a>
                <Link to="/search" className="list-group-item list-group-item-action" style={{ cursor: "pointer" }}>Перейти к поиску</Link>
            </Message>
        );
    }

    renderError() {
        return (
            <Message title=":(" message="Не удалось отправить форму" type="danger">
                <a className="list-group-item list-group-item-action" style={{ cursor: "pointer" }} onClick={this.resetResult}>Заполнить новую</a>
                <Link to="/search" className="list-group-item list-group-item-action" style={{ cursor: "pointer" }}>Перейти к поиску</Link>
            </Message>
        );
    }

    render() {
        if (this.state.result) {
            return this.state.result.success === true ?
                this.renderSuccess() : this.renderError();
        }
        else {
            return (
                <div>
                    <div className="d-flex flex-column align-items-center p-4">
                        <div className="w-50 p-4 shadow-lg">
                            <Form handleOnSubmit={this.handleOnSubmit} />
                        </div>
                    </div>
                    <Link to="/search">
                        <button className="btn btn-link fixed-bottom m-4">
                            <Search size="32" />
                        </button>
                    </Link>
                </div>);
        }
    }

}

export default FormPage;