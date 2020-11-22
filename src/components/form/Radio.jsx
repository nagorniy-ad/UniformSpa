import React from 'react';
import Label from './Label';
import Help from './Help';
import InvalidFeedback from './InvalidFeedback';

class Radio extends React.Component {

    render() {
        let helpId = `${this.props.id}-help`;
        let formCheckClassName = this.props.isValid ?
            "form-check" : "form-check is-invalid";
        let formCheckInputClassName = this.props.isValid ?
            "form-check-input" : "form-check-input is-invalid";
        return (
            <div className="form-group">
                <Label targetId={this.props.id} text={this.props.label} />
                <div id={this.props.id}>
                    {
                        this.props.options.map(option => {
                            return (
                                <div key={option} className={formCheckClassName}>
                                    <input className={formCheckInputClassName} type="radio" name={this.props.name} onChange={this.props.handleOnChange} value={option} />
                                    <label className="form-check-label">
                                        {option}
                                    </label>
                                </div>
                            );
                        })
                    }
                    <Help id={helpId} text={this.props.help} />
                    <InvalidFeedback text={this.props.invalidFeedback} />
                </div>
            </div>
        )
    }

}

export default Radio;