import React, { Component } from 'react'

export default class Card extends Component {
    render() {
       const{id,name,text}= this.props.card;
       const{deleteCard}=this.props;
        return (
          
<div className="card">
    <div className="card-container">
    <div className="card-title">
        <h1>{name}</h1>
    </div>
    <div className="card-text">
        <p>{text}</p>
    </div>
   
    <button className="delete-btn" onClick={()=> deleteCard(id)}>Delete</button>
  
        </div>
            </div>
            
        )
    }
}

