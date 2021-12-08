import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Sobre } from "./pages/Sobre/Sobre"

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Sobre}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes