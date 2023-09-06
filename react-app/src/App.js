import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import CreateProduct from "./components/CreateProduct";
import CartOrders from "./components/Orders/orders";
import Home from "./components/homePage";
import CreateProfile from "./components/CreateProfile/createProfile";
import SaveListPage from "./components/SaveLaterPage/savePage";
import UserProfile from "./components/UserProfile/profile";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect(() => {
  //   (async() => {
  //     await dispatch(authenticate());
  //     setIsLoaded(true);
  //   })();
  // }, [dispatch]);

  // if (!isLoaded) {
  //   return null;
  // }

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/account'>
            <UserProfile />
          </Route>
          <Route exact path='/profile-info'>
            <CreateProfile />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/buy/:itemId'>
            <CreateProduct />
          </Route>
          <Route exact path='/bag'>
            <CartOrders />
          </Route>
          <Route exact path = '/saved-list'>
            <SaveListPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
