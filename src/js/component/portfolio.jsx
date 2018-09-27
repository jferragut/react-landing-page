import React from 'react';

// Component for Portfolio
export const Portfolio = (props) => {
    let theCards = [
            {title: "Card Title", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",img: "http://placehold.it/500x325"},
            {title: "Card Title", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",img: "http://placehold.it/500x325"},
            {title: "Card Title", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",img: "http://placehold.it/500x325"},
            {title: "Card Title", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",img: "http://placehold.it/500x325"}
        ];
        
    
    const renderCards = theCards.map(card => (
        <div className="col-lg-3 col-md-6 mb-4" key={card.index}>
            <div className="card">
                <img className="card-img-top" src={card.img} alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.body}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    ));
    
    
        
    return(
        <div className="row text-center">
            {renderCards}
        </div>
    );
};

