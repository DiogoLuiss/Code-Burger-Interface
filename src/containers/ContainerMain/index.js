import React from "react";
import {ContainerDivMain} from "./styled"

function DivMain({children,...rest }) {

    return <ContainerDivMain {...rest} >{children}</ContainerDivMain>
    
}

export default DivMain