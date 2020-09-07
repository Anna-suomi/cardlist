import React, { Component } from 'react';
import Card from './Card';
import {cardData} from './cardData';

export default class CardList  extends Component {
    state ={
        cards: cardData
    };
    deleteCard = id =>{
        console.log(id);
        const{cards}= this.state;
        const sortedCards = cards.filter(card => card.id !== id);
        this.setState({
            cards:sortedCards
        })

    }
    render() {
const{cards} = this.state;
        return (
            <section>
                <div className="cardlist">
               
                {
                    cards.map(card =>(
                    
                    <Card key={card.id} card={card} deleteCard={this.deleteCard}/>))
                }
                </div>
              
             
            </section>
        );
    }
}


