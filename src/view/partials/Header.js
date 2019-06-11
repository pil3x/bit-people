import React from 'react';

export const Header = (props) => {
    const { title } = props;

    return (
        <header className='container-fluid text-center'>
            <h2>{title}</h2>
        </header>
    );
}


