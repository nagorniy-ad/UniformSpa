import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UniformConnector, { HttpError } from '../UniformConnector';
import Message from './Message';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                sex: '',
                story: '',
                age: '',
                hobbies: []
            },
            nameIsValid: true,
            sexIsValid: true,
            ageIsValid: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    handleChange(event) {
        this.setState(currentState => ({
            form: { ...currentState.form, [event.target.name]: event.target.value }
        }));
    }

    handleCheckBoxChange(event) {
        let source = this.state.form[event.target.name];
        let values;
        if (source.indexOf(event.target.value) > -1) {
            values = source.filter(s => s !== event.target.value);
        } else {
            values = [...source, event.target.value];
        }
        this.setState(currentState => ({
            form: { ...currentState.form, [event.target.name]: values }
        }));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.validate() === false) {
            return;
        }
        let connector = new UniformConnector();
        try {
            connector.sendForm(this.state.form).then(() => {
                this.setState({ formWasSend: true });
            });
        } catch (e) {
            if (e instanceof HttpError) {
                alert('Не удалось отправить форму из-за сетевой ошибки.');
                e.response.text().then(text => {
                    console.error(`${e.response.url} ${e.response.status}: ${text}`);
                });
            } else {
                throw (e);
            }
        }
    }

    validate() {
        let currentNameIsValid = this.state.form.name !== '';
        let currentSexIsValid = this.state.form.sex !== '';
        let currentAgeIsValid = this.state.form.age !== '';
        this.setState({
            nameIsValid: currentNameIsValid,
            sexIsValid: currentSexIsValid,
            ageIsValid: currentAgeIsValid
        });
        return currentNameIsValid && currentSexIsValid && currentAgeIsValid;
    }

    render() {
        if (this.state.formWasSend) {
            return <Message message="Форма успешно отправлена." />
        }
        return (
            <Form noValidate onSubmit={this.handleFormSubmit}>
                <h1 className="display-4">Анкета</h1>
                <hr className="mb-4" />
                <Form.Group>
                    <Form.Label>Введите Ваше имя:</Form.Label>
                    <Form.Control name="name" isInvalid={this.state.nameIsValid === false} onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">Необходимо ввести Ваше имя.</Form.Control.Feedback>
                    <small className="text-muted">Обязательно</small>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Укажите Ваш пол:</Form.Label>
                    <Form.Control as="select" name="sex" isInvalid={this.state.sexIsValid === false} onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="Мужской">Мужской</option>
                        <option value="Женский">Женский</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Необходимо указать Ваш пол.</Form.Control.Feedback>
                    <small className="text-muted">Обязательно</small>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Укажите дополнительную информацию о себе:</Form.Label>
                    <Form.Control as="textarea" name="story" rows="3" onChange={this.handleChange} />
                </Form.Group>
                <Form.Label>Выберите диапазон, соответствующий Вашему возрасту:</Form.Label>
                <Form.Group>
                    <Form.Check type="radio" name="age" label="0-18" value="0-18" className={this.state.ageIsValid ? '' : 'is-invalid'} isInvalid={this.state.ageIsValid === false} onChange={this.handleChange} />
                    <Form.Check type="radio" name="age" label="19-50" value="19-50" className={this.state.ageIsValid ? '' : 'is-invalid'} isInvalid={this.state.ageIsValid === false} onChange={this.handleChange} />
                    <Form.Check type="radio" name="age" label="51-100" value="51-100" className={this.state.ageIsValid ? '' : 'is-invalid'} isInvalid={this.state.ageIsValid === false} onChange={this.handleChange} />
                    <div className="invalid-feedback">Необходимо выбрать Ваш диапазон возраста.</div>
                    <small className="text-muted">Обязательно</small>
                </Form.Group>
                <Form.Label>Выберите Ваши интересы:</Form.Label>
                <Form.Group>
                    <Form.Check type="checkbox" name="hobbies" label="Работа" value="Работа" onChange={this.handleCheckBoxChange} />
                    <Form.Check type="checkbox" name="hobbies" label="Религия" value="Религия" onChange={this.handleCheckBoxChange} />
                    <Form.Check type="checkbox" name="hobbies" label="Путешествия" value="Путешествия" onChange={this.handleCheckBoxChange} />
                    <Form.Check type="checkbox" name="hobbies" label="Литература" value="Литература" onChange={this.handleCheckBoxChange} />
                </Form.Group>
                <hr className="mt-4" />
                <div className="d-flex justify-content-center">
                    <Button variant="primary" className="pl-4 pr-4" type="submit">Отправить</Button>
                </div>
            </Form>
        );
    }
}

export default UserForm;