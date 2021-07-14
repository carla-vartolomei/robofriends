import React from 'react';

const Scroll =  (props) => {
    return(
        <div style={{overflowY:'scroll', border:'0.3px solid light-green', height:'600px'}}>
            {props.children};
        </div>
    );
}

 export default Scroll;