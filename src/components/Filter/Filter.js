//import { useState } from 'react';

import useFilter from './useFilter';

import './Filter.styles.css';

const Filter = ({
    filterHTML, 
    filterCSS, 
    filterJS, 
    filterPython,
    filterRuby,
    clearFilters
}) => {
  

    const {
        isShown,
        showListHandler
    } = useFilter();

    return (
        <div>
            <div className="filter-btn-container">
                <button className="filter-btn" onClick={showListHandler}>Add filter</button>
            </div>
            {isShown &&
            <div>
                <button className="specific-filter" onClick={filterHTML}>HTML</button>
                <button className="specific-filter" onClick={filterJS}>JavaScript</button>
                <button className="specific-filter" onClick={filterCSS}>CSS</button>
                <button className="specific-filter" onClick={filterPython}>Python</button>
                <button className="specific-filter" onClick={filterRuby}>Ruby</button>
                <button className="specific-filter" onClick={clearFilters}>Clear filter</button>
            </div>}
        </div>
    )
}

export default Filter;