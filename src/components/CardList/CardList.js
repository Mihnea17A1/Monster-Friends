import React from 'react';
import Card from '../Card/Card.js';

const CardList = ({ monsters }) => {
    if (!monsters || !Array.isArray(monsters)) {
        // Handle the case where monsters is not an array or undefined
        return <div>Loading...</div>; // You can display a loading message or handle it differently
    }

    return (
        <div id='monster-list' className="cards-wrapper tc bg-light-blue">
            {monsters.map(printCard)}
        </div>
    );
}

const printCard = ({ id, name, email, username }) => {
    return <Card key={id} id={id} name={name} email={email} username={username} />
}

export default CardList;