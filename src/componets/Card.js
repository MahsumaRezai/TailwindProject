import React, { Fragment } from 'react';

const Card = (props) => {
    return (
   <Fragment>
     <div className="bg-blue-100 w-6/12 h-fit m-auto mt-40 ">
     {props.children}

     </div>

   </Fragment>
    
    )
};

export default Card;