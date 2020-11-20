import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchResult from "./SearchResult";
import UniformConnector, { HttpError } from "../UniformConnector";
import { Link } from 'react-router-dom';
import { Check2Square } from 'react-bootstrap-icons';

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            jsons: [],
            pageWasInitialized: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({ pageWasInitialized: false });
        let connector = new UniformConnector();
        try {
            connector.searchForm(this.state.query).then(data => {
                this.setState({ jsons: data });
            });
        } catch (e) {
            if (e instanceof HttpError) {
                alert('Не удалось получить данные из-за сетевой ошибки.');
                e.response.text().then(text => {
                    console.error(`${e.response.url} ${e.response.status}: ${text}`);
                });
            }
            else {
                throw (e);
            }
        }
    }

    render() {
        return (
            <div>
                <Form className="d-flex justify-content-center m-4" onSubmit={this.handleFormSubmit}>
                    <Form.Control className="mr-2" onChange={this.handleChange} />
                    <Button type="submit">Поиск</Button>
                </Form>
                <p className="lead text-center">{this.state.pageWasInitialized ? '' : `Найдено анкет: ${this.state.jsons.length}`}</p>
                <div className="d-flex justify-content-center">
                    <SearchResult jsons={this.state.jsons} />
                </div>
                <Link to="/">
                    <Button className="fixed-bottom m-4" variant="link">
                        <Check2Square size="32" />
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchPage;