import React from 'react';
import PropTypes from 'prop-types';

// Component for Header
export const TheHeader = (props) => {
    let menuList=[
            { name: "Home", url: "/"},
            { name: "Products", url: "/products"},
            { name: "About", url: "/about"},
            { name: "Services", url: "/services"},
            { name: "Contact", url: "/contact"}
        ];
        
    const items = menuList.map(item => (
        <li className="nav-item" key={item.name}>
            <a className="nav-link" href={item.url}>{item.name}</a>
        </li>
    ));
    
    
    return(
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        {items}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

TheHeader.propTypes = {
  title: PropTypes.string
};