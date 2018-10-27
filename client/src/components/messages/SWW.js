import React from 'react';
import PropTypes from 'prop-types';

const SWW = ({text}) =>{
    return(
        <div className="alert alert-danger text-center" role="alert">
            Something went wrong  <br/>
            {text} — check it out! 
        </div>
    )
};


SWW.propTypes={
    text: PropTypes.string.isRequired
}

export default SWW;