import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
            <div id="searchbox">
                <input id='search-input' className='tc pa2 navy bg-light-blue' type="search" placeholder='search a monster' onChange={searchChange}/>
            </div>
    );
}


export default SearchBox;
