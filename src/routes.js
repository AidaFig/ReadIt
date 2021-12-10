import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Books } from "./pages/Books/Books";

import { Sobre } from "./pages/Sobre/Sobre"

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Sobre}/>
                <Route path="/livros" exact component={Books}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes