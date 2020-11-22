import React from 'react';
import Label from './Label';
import Help from './Help';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        let values = this.state.selected.indexOf(event.target.value) > -1 ?
            this.state.selected.filter(s => s !== event.target.value) :
            [...this.state.selected, event.target.value];
        this.setState({
            selected: values
        });
        this.props.handleOnChange(event, values);
    }

    render() {
        let helpId = `${this.props.id}-help`;
        return (
            <div className="form-group">
                <Label targetId={this.props.id} text={this.props.label} />
                <div id={this.props.id}>
                    {
                        this.props.options.map(option => {
                            return (
                                <div key={option} className="form-check">
                                    <input className="form-check-input" type="checkbox" name={this.props.name} onChange={this.handleOnChange} value={option} />
                                    <label className="form-check-label">
                                        {option}
                                    </label>
                                </div>
                            );
                        })
                    }
                </div>
                <Help id={helpId} text={this.props.help} />
            </div>
        )
    }

}

export default CheckBox;