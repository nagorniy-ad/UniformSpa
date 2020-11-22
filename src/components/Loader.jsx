import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Загрузка</span>
                </div>
            </div>
        );
    }

}

export default Loader;