import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import Banner from "./Banner";
import Row from './Row'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {login, logout } from './features/UserSlice'
import { auth } from './firebase'
import requests from "./requests";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

 useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          user: authUser.email
        }))
      }
      else {
        dispatch(logout());
      }
    })
  },[dispatch])



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
            title="Trending"
            fetchUrl={requests.Trending}
            />
            <Row 
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            />
            <Row 
            title="Action"
            fetchUrl={requests.fetchActionMovies}
            />
            <Row 
            title="Comedy"
            fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
            title="Romance"
            fetchUrl={requests.fetchRomanceMovies}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
