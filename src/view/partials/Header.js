import React from 'react';

export const Header = (props) => {
    const { title } = props;

    return (
        <header className='container-fluid'>
            <h2>{title}</h2>
            <div className="btn-holders">
                <input className="btn-grid " type="button" value="Grid Layout" />
                <input className="btn-list " type="button" value="List Layout" />
            </div>
        </header>
    );
}


