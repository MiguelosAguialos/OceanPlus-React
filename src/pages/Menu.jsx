import { useState } from "react"
import { Tweet } from "../components/Tweet"
import { Link } from 'react-router-dom';

export function Menu(){
const [tweets, setTweets] = useState([])
   const [num, setNum] = useState(1)

function createTweet(){
    setTweets([...tweets, num])
    setNum(num+1)
}
    return(
        <div>
            <h1>Menu</h1>
       {tweets.map(tweet => {
         return <Tweet text={tweet}/>
       })}
       <button onClick={createTweet}>Adicionar Tweet</button>
       <Link to='/cart'><button style={{margin: '10px'}}>Carrinho</button></Link>
       <Link to='/catalog'><button>Catálogo</button></Link>
     </div>
    )
}