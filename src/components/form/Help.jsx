import React from 'react';

class Help extends React.Component {

    render() {
        return (
            <small id={this.props.id} className="form-text text-muted">
                {this.props.text}
            </small>
        )
    }

}

export default Help;