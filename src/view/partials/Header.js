import React from 'react';

export const Header = (props) => {
    const { title, onButtonClick, isGrid } = props;

    return (
        <header className='container-fluid'>
            <a href="index.html"><h2>{title}</h2></a>
            <div className="btn-holders">
                <span onClick={onButtonClick}>
                    <i className={(isGrid) ? "fas fa-th-list" : "fas fa-th-large"}></i>
                </span>
                {/* <input onClick={onButtonClick} className="btn-grid " type="button" value="Grid Layout" />
                <input className="btn-list " type="button" value="List Layout" /> */}
            </div>
        </header>
    );
}


