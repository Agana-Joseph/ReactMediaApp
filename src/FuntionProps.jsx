import React from "react";

function FuntionProps(props){
    return( <div>
        <h3>This is funtional Component</h3>
        <h3>Welcome gentle {props.name}! you're curently in {props.location}</h3>
    </div>
    )
}
export default FuntionProps;