import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./pages/index.js";
import IndexPage from './pages';
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/Users";
import RolexWatchPage from "./pages/RolexWatchPage.js";
import RolexMensWatches from "./pages/pagesJS/RolexMensWatches.jsx";
import RolexWomensWatches from "./pages/pagesJS/RolexWomensWatches.jsx";
import AddNewWatch from './pages/pagesJS/AddNewWatch';
import EveryRolexTellsAStory from './pages/pagesJS/EveryRolexTellsAStory';
import LoginPage from './pages/pagesJS/LoginPage';
import RegistrationPage from "./pages/pagesJS/RegistrationPage.jsx";
import SuccessfullyRegistrated from "./pages/pagesJS/SuccessfullyRegistrated";
import AdminPage from './pages/pagesJS/AdminPage';
import UserPage from "./pages/pagesJS/UserPage";
import ManageWatchesPage from './pages/pagesJS/ManageWatchesPage';
import ManageUsers from "./pages/pagesJS/ManageUsers";
import ManageOrders from "./pages/pagesJS/ManageOrders";
import UserCartPage from './pages/pagesJS/UserCartPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Route exact path="/users" component={UsersPage}/>
          <Route exact path="/watches/man" component={RolexMensWatches}/>
          <Route exact path="/admin/addnewwatch" component={AddNewWatch}/>
          <Route exact path="/watches/woman" component={RolexWomensWatches}/>
          <Route exact path="/worldofrolex" component={NotFoundPage}/>
          <Route exact path="/rolexstory" component={EveryRolexTellsAStory}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/admin" component={AdminPage}/>
          <Route exact path="/admin/managewatches" component={ManageWatchesPage}/>
          <Route exact path="/admin/manageusers" component={ManageUsers}/>
          <Route exact path="/admin/manageorders" component={ManageOrders}/>
          <Route exact path="/user" component={UserPage}/>
          <Route exact path="/user/cart" component={UserCartPage}/>
          <Route exact path="/registration" component={RegistrationPage}/>
          <Route exact path="/registered" component={SuccessfullyRegistrated}/>
          <Route exact path="/watches/man/:watchModel">
            <RolexWatchPage/>
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
