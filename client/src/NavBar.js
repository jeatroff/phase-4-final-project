import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function NavBar({ setUser, user }) {
    const navigate = useNavigate()

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE"
        }).then((res => {
            if (res.ok){
                setUser(null)
                navigate("/")
            }
        }))
    }

  return (
    user ? (<nav>
        <NavLink exact to="/">Home</NavLink>
        &emsp;
        <NavLink exact="true" to="/profile">Profile</NavLink>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button onClick={handleLogoutClick}>Logout</button>
    </nav> ) :
    (<nav>
        <p>
            <NavLink exact="true" to="/">Home</NavLink>
            &emsp;
            <NavLink exact="true" to="/login">Log In</NavLink>
            &emsp;
            <NavLink exact="true" to="/signup">Sign Up</NavLink>
        </p>
    </nav>)
)};

export default NavBar;