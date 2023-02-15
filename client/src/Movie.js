import { useState } from 'react'

function Movie({image, name, id, user}) {
    const [isClicked, setisClicked] = useState(false)
    const user_movie_id = Math.floor(Math.random() * 100000) + 1

    function handleClick(e) {
        if(!isClicked) {
            setisClicked(!isClicked);
            let user_movie = {
                id: user_movie_id,
                user_id: user.id,
                movie_id: id
            }

            fetch("/user_movies",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user_movie)
            })
            .then(res => {
                if(res.ok){
                    res.json().then((r) => {
                    })
                } else {
                    res.json().then(console.log)
                }
            })
        }
    }
    return (
        <div>
            <img src={image} height={300} onClick={handleClick}/>
            {isClicked ? <p style={{color:"red"}}>{name}</p> : <p>{name}</p>}
        </div>
    );
}

export default Movie;