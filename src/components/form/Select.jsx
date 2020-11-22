import React from 'react';
import Label from './Label';
import Help from './Help';
import InvalidFeedback from './InvalidFeedback';

class Select extends React.Component {

    render() {
        let helpId = `${this.props.id}-help`;
        let controlClassName = this.props.isValid ?
            "form-control" : "form-control is-invalid";
        return (
            <div className="form-group">
                <Label targetId={this.props.id} text={this.props.label} />
                <select id={this.props.id} name={this.props.name} className={controlClassName} aria-describedby={helpId} onChange={this.props.handleOnChange} value={this.props.value}>
                    {
                        this.props.options.map(option => {
                            return (
                                <option key={option} name={option} value={option}>{option}</option>
                            );
                        })
                    }
                </select>
                <Help id={helpId} text={this.props.help} />
                <InvalidFeedback text={this.props.invalidFeedback} />
            </div>
        )
    }

}

export default Select;