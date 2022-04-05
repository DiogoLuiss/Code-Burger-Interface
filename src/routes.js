import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index"
import Users from "./pages/users"

function Routes() {

    return (
        <Router>

            <Switch>

                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/Pedidos"} component={Users}/>

            </Switch>

        </Router>

    )

}
export default Routes