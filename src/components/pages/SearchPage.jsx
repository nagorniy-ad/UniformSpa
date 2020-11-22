import React, { Component } from "react";
import UniformConnector from "../../connectors/UniformConnector";
import FieldMapper from "../../mappers/FieldMapper";
import { Link } from 'react-router-dom';
import { Check2Square } from 'react-bootstrap-icons';

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            result: null
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let connector = new UniformConnector();
        connector
            .searchForm(this.state.query)
            .then(data => this.setState({ result: { success: true, data: data } }))
            .catch(e => this.setState({ result: { success: false, error: e } }));
    }

    renderSuccess() {
        return (
            <div>
                <p className="lead text-center">{`Найдено анкет: ${this.state.result.data.length}`}</p>
                <div className="d-flex justify-content-center">
                    <div>
                        {
                            this.state.result.data.map((json, index) => {
                                return (
                                    <div key={index} className="card bg-light mb-2" style={{ width: '32rem' }} >
                                        <div className="card-body">
                                            <p className="card-text">
                                                {
                                                    Object.entries(JSON.parse(json)).map(([key, value]) => {
                                                        let displayName = FieldMapper.getDisplayName(key);
                                                        let displayValue = value;
                                                        if (Array.isArray(value)) {
                                                            displayValue = value.join(", ");
                                                        }
                                                        return <span key={key}>{displayName}: {displayValue}<br /></span>
                                                    })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    renderError() {
        return <p className="lead text-center">Не удалось выполнить поиск</p>
    }

    render() {
        const resultView = this.state.result ?
            this.state.result.success ?
                this.renderSuccess() : this.renderError()
            : "";
        return (
            <div>
                <form className="d-flex justify-content-center m-4" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Строка для поиска" onChange={this.handleOnChange} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Найти</button>
                        </div>
                    </div>
                </form>
                {resultView}
                <Link to="/">
                    <button className="btn btn-link fixed-bottom m-4">
                        <Check2Square size="32" />
                    </button>
                </Link>
            </div>
        );
    }
}

export default SearchPage;