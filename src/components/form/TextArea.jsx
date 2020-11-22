import React from 'react';
import Label from './Label';
import Help from './Help';

class TextArea extends React.Component {

    render() {
        let helpId = `${this.props.id}-help`;
        return (
            <div className="form-group">
                <Label targetId={this.props.id} text={this.props.label} />
                <textarea id={this.props.id} name={this.props.name} className="form-control" rows={this.props.rows} aria-describedby={helpId} onChange={this.props.handleOnChange} value={this.props.value} />
                <Help id={helpId} text={this.props.help} />
            </div>
        )
    }

}

export default TextArea;