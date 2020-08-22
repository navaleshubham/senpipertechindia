import React from 'react';
import './App.css';
import Navbar from './components/navbar.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import PostRead from './components/posts_read.component';
import Footer from "./components/footer.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import PostNew from "./components/post_create.component";
import PostUpdate from "./components/post_update.component";
import PostDelete from "./components/post_delete.component";
import Post from "./components/post.component";
function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <hr></hr>

            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Post}></Route>
                    <Route path='/Post' component={PostRead}></Route>
                    <Route path='/Login' component={Login}></Route>
                    <Route path='/Register' component={Register}></Route>
                    <Route path='/New' component={PostNew}></Route>
                    <Route path='/Update' component={PostUpdate}></Route>
                    <Route path='/Delete' component={PostDelete}></Route>
                    {/*<Route path='/Register' component={Register}></Route>*/}
                </Switch>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
