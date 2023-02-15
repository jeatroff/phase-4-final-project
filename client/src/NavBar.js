import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function NavBar({ setUser, user }) {
    const history = useNavigate()

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE"
        }).then((res => {
            if (res.ok){
                setUser(null)
                history.push("/")
            }
        }))
    }

  return (
    user ? (<nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <button onClick={handleLogoutClick}>Logout</button>
    </nav> ) :
    (<nav>
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink exact to="/login">
            Log In
        </NavLink>
        <NavLink exact to="/signup">
            Sign Up
        </NavLink>
    </nav>)
)};


export default NavBar;