import React from 'react';
import { Link } from "react-router-dom";
import MenuItems from './MenuItems.js';

export const Header = (props) => {
    const { title, onButtonClick, isGrid, onRefreshClick } = props;

    return (
        <header className='container-fluid'>
            <div className="container header-inner">
                <Link to="/"><h2>{title}</h2></Link>
                <div className="btn-holders">
                    <MenuItems />

                    <span onClick={onRefreshClick}>
                        <i className="fas fa-redo"></i>
                    </span>
                    <span onClick={onButtonClick}>
                        <i className={(isGrid) ? "fas fa-th-list" : "fas fa-th-large"}></i>
                    </span>
                </div>
            </div>
        </header >
    );
}


