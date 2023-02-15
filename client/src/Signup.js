import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Signup({user, setUser}) {
   
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
     
    const [errors, setErrors] = useState([])
    const history = useNavigate()

    function handleUsernameChange(e){
        SetUsername(e.target.value)
    }

    function handlePasswordChange(e){
        SetPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

    fetch("/signup",{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
                 setUser(user)
                 history.push(`/users/${user.id}`)
              })
          } else {
              res.json().then(console.log)
              // setErrors(Object.entries(json.errors))
          }
      })
     
  }


    return (
        <div className="loginForm"> 
            <form onSubmit={onSubmit}>
                <h1>Create an Account</h1>
                <input placeholder="Username" type='text' name='username' value={username} onChange={e => handleUsernameChange(e)} />
                <div></div>
                <input placeholder="Password" type='password' name='password' value={password} onChange={e => handlePasswordChange(e)} />
                <div></div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Signup