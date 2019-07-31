import React, {Component,Fragment} from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Login from "./view/login/Login";
// import {Provider} from "react-redux"

class App extends Component{
    render() {
        return(
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}

export default App;
