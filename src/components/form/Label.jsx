import React from 'react';

class Label extends React.Component {

    render() {
        return (
            <label htmlFor={this.props.targetId}>
                {this.props.text}
            </label>
        )
    }

}

export default Label;