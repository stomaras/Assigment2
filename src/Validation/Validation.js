import React from 'react'
/* Every time i nedd to return jsc code because in other case is not component*/
const validation = (props) => {
    // 1st way
    let validationMessage = 'Text long enough';
    
    if(props.inputLength <= 5) {
        validationMessage= 'Text too short';
    }
    
    /* 2nd Way
            {

                props.inputLength > 5 ?
                    <p>Text Long Enough</p> :
                    <p>Text too short</p>
            }
            */
    
    return (
        <div>
            <p>{validationMessage}</p>
        
        
         </div>
    );
};

export default validation;