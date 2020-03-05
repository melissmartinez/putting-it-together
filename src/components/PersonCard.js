import React from 'react';

const PersonCard = ({ firstName, lastName, hairColor, age, haveBDay, index }) => {
    return (
        <div className="card col-10 mx-auto" >
            <h2> {lastName}, {firstName} </h2>
            <p> Age: {age} </p>
            <p> Hair Color: {hairColor} </p>

            <button className="col-3 mx-auto btn btn-warning" onClick={() => haveBDay(index)} > Birthday Button for {firstName} {lastName} </button>
        </div>
    )
}

export default PersonCard;