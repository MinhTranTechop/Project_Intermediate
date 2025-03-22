import React from "react";
import SignIn from "./pages/ts/SignIn";
import ForgetPass from "./pages/ts/ForgetPass";
import NotifyPass from "./pages/ts/NotifyPass";
import NewPass from "./pages/ts/NewPass";
import Profile from "./pages/ts/Profile";
import AddAuthorized from "./components/ManageContract/ts/AddAuthorized";
import ListAuthorized from "./components/ManageContract/ts/ListAuthorized";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/Login" element={<SignIn />}/>
            <Route path="/ForgetPass" element={<ForgetPass />} />
            <Route path="/NotifyPass" element={<NotifyPass />} />
            <Route path="/NewPass/:userId" element={<NewPass/>}/>
            <Route path="/Profile/:userId" element={<Profile />} />
            <Route path="/ListAuthorizedContract"element={<ListAuthorized/>}/>
            <Route path="/AddAuthorizedContract"element={<AddAuthorized/>}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
