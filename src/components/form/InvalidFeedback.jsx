import React from 'react';

class InvalidFeedback extends React.Component {

    render() {
        return (
            <div className="invalid-feedback">{this.props.text}</div>
        )
    }

}

export default InvalidFeedback;