import React from "react";

const updatedComp = OriginalComp => {
    class newComp extends React.Component{
        render(){
            return <OriginalComp name = "The user" />
        }
    }
    return newComp;
}

export default updatedComp;
