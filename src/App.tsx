import React from 'react';
import SignIn from './pages/ts/SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div >

       <Router>
        <Routes>
          <Route path='/Login'  element={<SignIn/>}  />
        </Routes>
          </Router>
    </div>
    </Provider>
  );
}

export default App;
