import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/login">
              <Login setUser={setUser} user={user}/>
          </Route>

          <Route exact path="/signup">
            <Signup setUser={setUser} user={user}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
