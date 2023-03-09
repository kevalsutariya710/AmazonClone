import './App.css';
import Header from "./component/Header"
import Login from "./component/Login"
import Home from "./component/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Checkout from './component/Checkout';
import Footer from "./component/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={
          <div>
            <Header />
            <Checkout />
          </div>
        } />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/"
          element={
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
      </Routes>

    </Router >

  );
}

export default App;