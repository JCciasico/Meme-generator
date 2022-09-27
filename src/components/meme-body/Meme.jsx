import './Meme.css'
import memesData from '../../data/memesData'
import React from "react"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(e){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        e.preventDefault()
    }

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <img src={memeImage} className="meme--image"/>
            </form>
        </main>
    )
}