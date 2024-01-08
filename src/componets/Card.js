import React, { Fragment } from 'react';

const Card = (props) => {
    return (
   <Fragment>
     <div className="bg-blue-100 w-4/12 h-max m-auto mt-40 p-12 flex flex-row flex justify-center justify-items-center gap-2  ">
     {props.children}

     </div>

   </Fragment>
    
    )
};

export default Card;