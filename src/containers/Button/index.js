import React from "react";
import {Button} from "./styled"

function ContaineButton({children,...rest}) {

    return <Button {...rest}>{children}</Button>
    
}
export default ContaineButton