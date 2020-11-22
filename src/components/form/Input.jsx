import React from 'react';
import Label from './Label';
import Help from './Help';
import InvalidFeedback from './InvalidFeedback';

class InputText extends React.Component {

    render() {
        let helpId = `${this.props.id}-help`;
        let controlClassName = this.props.isValid ?
            "form-control" : "form-control is-invalid";
        return (
            <div className="form-group">
                <Label targetId={this.props.id} text={this.props.label} />
                <input id={this.props.id} type={this.props.type} name={this.props.name} className={controlClassName} aria-describedby={helpId} onChange={this.props.handleOnChange} value={this.props.value} />
                <Help id={helpId} text={this.props.help} />
                <InvalidFeedback text={this.props.invalidFeedback} />
            </div>
        )
    }

}

export default InputText;