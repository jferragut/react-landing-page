import React from 'react';
import PropTypes from 'prop-types';

// Component for Footer
export const TheFooter = (props) => {
    return(
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; {props.company} 2018</p>
            </div>
        </footer>
    );
};

TheFooter.propTypes = {
  company: PropTypes.string
};