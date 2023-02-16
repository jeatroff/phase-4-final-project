import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({ user, setUser }) {
    let default_name = user.name ? user.name : ""
    let default_age = user.age ? user.age : 18
    let default_description = user.description ? user.description : ""

    const [name, setName] = useState(default_name)
    const [age, setAge] = useState(default_age)
    const [description, setDescription] = useState(default_description)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()
    
    function changeName(e) {
        setName(e.target.value)
    }

    function changeAge(e) {
        setAge(e.target.value)
    }

    function changeDescription(e) {
        setDescription(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        fetch(`/users/${user.id}`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                age: age,
                description: description
            })
        })
        .then(res => {
            if(res.ok) {
                res.json()
            }
        })
    }

    function handleDeleteClick(){
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        })
        fetch("/logout", {
            method: "DELETE"
        }).then((res => {
            if (res.ok){
                setUser(null)
                navigate("/")
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        }))
    }
    
    return (
        <div className="form">
            <h2>About Me</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Name:&emsp;
                    <input placeholder={name} type='text' name='name' value={name} onChange={changeName} />
                </div>
                <p>
                    Age:&emsp;&ensp;&ensp;
                    <input placeholder={age} type='number' name='age' value={age} onChange={changeAge} />
                </p>
                <div>
                    Description:&emsp;
                    <div></div>
                    <input placeholder={description} type='text' class="resizedTextbox" size={50} name='description' value={description} onChange={changeDescription} />
                </div>
                <input type='submit' value='Save' />
            </form>
            <div></div>
            <button onClick={handleDeleteClick}>Delete Account</button>
        </div>
    );
}
export default Profile;