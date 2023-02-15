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
        <p>
            <NavLink exact to="/">Home</NavLink>
            &emsp;
            <NavLink exact to="/discover">Discover</NavLink>
            &emsp;
            <NavLink exact to="/matches">Matches</NavLink>
            &emsp;
            <NavLink exact to="/profile">Profile</NavLink>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <NavLink exact to="/login">Log In</NavLink>
            &emsp;
            <NavLink exact to="/signup">Sign Up</NavLink>
        </p>
    </nav>)
)};


export default NavBar;