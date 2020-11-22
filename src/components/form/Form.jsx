import React from 'react';
import CheckBox from './CheckBox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';
import UniformConnector from '../../connectors/UniformConnector';
import Loader from '../Loader';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            form: {
                name: '',
                sex: '',
                story: '',
                age: '',
                hobbies: []
            },
            sexOptions: ['', 'Мужской', 'Женский'],
            ageOptions: ['0-18', '19-50', '51-100'],
            hobbyOptions: ['Путешествия', 'Религия', 'Еда', 'Спорт', 'Работа'],
            errors: []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event, values) {
        this.setState(currentState => ({
            form: { ...currentState.form, [event.target.name]: values ? values : event.target.value }
        }));
    }

    handleOnSubmit(event) {
        event.preventDefault();
        if (this.validate() === false) {
            return;
        }
        let connector = new UniformConnector();
        this.setState({ loading: true });
        connector
            .sendForm(this.state.form)
            .then(() => this.props.handleOnSubmit({ success: true }))
            .catch(e => this.props.handleOnSubmit({ success: false, error: e }));
    }

    validate() {
        let errors = [];
        if (this.state.form.name === '') {
            errors.push('name');
        }
        if (this.state.form.sex === '') {
            errors.push('sex');
        }
        if (this.state.form.age === '') {
            errors.push('age');
        }
        this.setState({ errors: errors });
        return errors.length === 0;
    }

    render() {
        if (this.state.loading === true) {
            return <Loader />;
        }
        return (
            <form noValidate onSubmit={this.handleOnSubmit}>
                <h1 className="display-4">Анкета</h1>
                <hr className="mb-4" />
                <Input
                    id='form-name'
                    label='Введите Ваше имя'
                    type='text'
                    name='name'
                    handleOnChange={this.handleOnChange}
                    value={this.state.form.name}
                    help='Обязательно'
                    isValid={this.state.errors.includes('name') === false}
                    invalidFeedback='Пожалуйста, введите Ваше имя' />
                <Select
                    id='form-sex'
                    label='Выберите Ваш пол'
                    name='sex'
                    handleOnChange={this.handleOnChange}
                    value={this.state.form.sex}
                    options={this.state.sexOptions}
                    help='Обязательно'
                    isValid={this.state.errors.includes('sex') === false}
                    invalidFeedback='Пожалуйста, выберите Ваш пол' />
                <TextArea
                    id='form-story'
                    label='Расскажите что-нибудь о себе'
                    name='story'
                    handleOnChange={this.handleOnChange}
                    value={this.state.form.story}
                    rows='3'
                    help='' />
                <Radio
                    id='form-age'
                    label='Выберите диапазон, соответствующий Вашему возрасту'
                    name='age'
                    handleOnChange={this.handleOnChange}
                    value={this.state.form.age}
                    options={this.state.ageOptions}
                    help='Обязательно'
                    isValid={this.state.errors.includes('age') === false}
                    invalidFeedback='Пожалуйста, выберите диапазон, соответствующий Вашему возрасту' />
                <CheckBox
                    id='form-hobbies'
                    label='Выберите Ваши интересы'
                    name='hobbies'
                    handleOnChange={this.handleOnChange}
                    value={this.state.form.hobbies}
                    options={this.state.hobbyOptions}
                    help='' />
                <hr className="mt-4" />
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </div>
            </form>
        )
    }

}

export default Form;