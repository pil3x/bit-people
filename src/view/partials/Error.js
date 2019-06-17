import React from 'react';

const ErrorContent = () => {
    return (

        <div className="container main-holder">
            <div className="row">
                <div className="col-12">
                    <span className="error-icon-holder"><i className="far fa-meh"></i></span>
                    <h3>We couldn't find any people matching your search</h3>
                </div>
            </div>
        </div>
    )
}

export default ErrorContent;