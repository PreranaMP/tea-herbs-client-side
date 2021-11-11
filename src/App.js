import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import OrderReview from './Pages/OrderRiview/OrderReview/OrderReview';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MoreDetails from './Pages/Products/MoreDetails/MoreDetails';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/moredetails/:productId">
              <MoreDetails></MoreDetails>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
