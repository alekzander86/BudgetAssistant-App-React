import React from 'react';
import PropTypes from 'prop-types';

const InlineErrors =({text})=>
  
        <div className="alert alert-danger text-center" role="alert">
            {text} 
        </div>

InlineErrors.propTypes={
    text: PropTypes.string.isRequired
}
    
export default InlineErrors;