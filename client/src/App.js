import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Matches from "./Matches";
import Discover from "./Discover";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
        <h1>Movie Collector</h1>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/" element={<Home user={user}/>}/>
          <Route exact path="/matches" element={<Matches setUser={setUser} user={user}/>}/>
          <Route exact path="/discover" element={<Discover setUser={setUser} user={user}/>}/>
          <Route exact path="/profile" element={<Profile setUser={setUser} user={user}/>}/>
          <Route exact path="/login" element={<Login setUser={setUser} user={user}/>}/>
          <Route exact path="/signup" element={<Signup setUser={setUser} user={user}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
