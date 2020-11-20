import React, { Component } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

class FormPage extends Component {

    render() {
        return (
            <div>
                <div className="d-flex flex-column align-items-center p-4">
                    <div className="w-50 p-4 shadow-lg">
                        <UserForm />
                    </div>
                </div>
                <Link to="/search">
                    <Button className="fixed-bottom m-4" variant="link">
                        <Search size="32" />
                    </Button>
                </Link>
            </div>
        );
    }

}

export default FormPage;