import React from "react";

const PlayerCard = props => {
    console.log(props);
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
            <p>{props.searches}</p>
        </div>
    );
};

export default PlayerCard;