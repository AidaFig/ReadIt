import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Books } from "./pages/Books/Books";
import { Sobre } from "./pages/Sobre/Sobre";
import { Romance } from "./pages/Romance/Romance";
import { Biography } from "./pages/Biography/Biography";
import { Horror } from "./pages/Horror/Horror";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Sobre} />
                <Route path="/livros" exact component={Books} />
                <Route path="/romance" exact component={Romance} />
                <Route path="/biografia" exact component={Biography} />
                <Route path="/terror" exact component={Horror} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes