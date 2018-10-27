import React from 'react';

const Message = ({text, type})=>{

    return(
        <div className="container my-5">
            <div className={type} role="alert">
                {text}
            </div>
        </div>
    );
}

export default Message;