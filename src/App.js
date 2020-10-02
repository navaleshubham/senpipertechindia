import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import home from './components/home/home.componet';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={home}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
