//import { useState } from 'react';

import useFilter from './useFilter';

const Filter = ({
    filterHTML, 
    filterCSS, 
    filterJS, 
    filterPython,
    filterRuby
}) => {
  

    const {
        isShown,
        showListHandler
    } = useFilter();

    return (
        <div>
            <button onClick={showListHandler}>Add filter</button>
            {isShown &&
            <div>
                <button onClick={filterHTML}>HTML</button>
                <button onClick={filterJS}>JavaScript</button>
                <button onClick={filterCSS}>CSS</button>
                <button onClick={filterPython}>Python</button>
                <button onClick={filterRuby}>Ruby</button>
            </div>}
        </div>
    )
}

export default Filter;