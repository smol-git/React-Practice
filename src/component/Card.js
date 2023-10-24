import React from "react";

export default function Card(props){
    return(
        <div>
            <h1>I am Card {props.cardData.number}</h1>
            <h1>I am  {props.cardData.name}</h1>
        </div>
    );
}