import axios from "axios";
import { useEffect, useState } from "react";

export default function Hero() {
  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function getMemes(){
      try {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        const data = await response.data;
        setAllMemes(data.data.memes)
      } catch (error) {
        console.log(error);
      }
    }
    getMemes();
}, [])


  function onGetMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length)

    setMeme({
        ...meme,
        randomImage: allMemes[randomNumber].url
    })
  }
  function onHandleInputChange(event){
    const {name,value} = event.target;
    setMeme({
      ...meme,
      [name] : value
    })
  }
  return (
    <section className="flex flex-col items-center justify-center ">
      <form className="grid grid-cols-2 gap-6 p-8" aria-label="Meme Text Form">
        <div className="flex flex-col">
          <label>Top Text</label>
          <input
            placeholder="Shut up"
            className="w-full rounded-sm border-2 px-4 py-1 sm:px-5 sm:py-1.5"
            name="topText"
            onChange={onHandleInputChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Bottom Text</label>
          <input
            placeholder="And take my money"
            className="w-full rounded-sm border-2 px-4 py-1 sm:px-5 sm:py-1.5"
            name="bottomText"
            onChange={onHandleInputChange}
          ></input>
        </div>
        <button
          className=" main-bg col-span-2 rounded-lg p-3 text-sm text-white sm:text-lg"
          onClick={onGetMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </form>
      <div aria-label="Meme" className="relative text-center">
        <img src={meme.randomImage} alt="meme img" className="w-full h-full max-container p-5"></img>
        <h2 className="absolute top-10 text-white sm:text-4xl text-xl text-shadow w-full uppercase font-bold">{meme.topText}</h2>
        <h2 className="absolute bottom-10 text-white sm:text-4xl text-xl text-shadow w-full uppercase font-bold">{meme.bottomText}</h2>
      </div>
    </section>
  );
}