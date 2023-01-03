import SubmitButton from '../../components/searchBar/SubmitButton'
import InputSearch from '../../components/playlist/inputSearch';
import ImageCard from '../../components/imageformat/ImageCard';
import React from 'react';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";

export default function Home() {

    const spotifyApi = new SpotifyWebApi();
    //spotify stuff
    // const [token, setToken] = React.useState("");
    const [searchKey, setSearchKey] = React.useState("");
    const [tracks, setSongs] = React.useState([]);

    const [id, setId] = React.useState(395);
    const [text, setText] = React.useState(null); //used for flavor text
    const [theImage, setTheImage] = React.useState(null); //used to fetch image

    //input stuff
    const [holderInputText, setholderInputText] = React.useState('notext'); //a holder for the input - is written to on every keystroke!
    const [inputText, setinputText] = React.useState('empoleon'); //inputText is the value passed in when the user submits 
    //(by pressing enter or the submit button). It is the value called in our image and flavortext functions
    //and initialized currently to 'empoleon' but change that pokemon when you push for fun!

    const [pokeName, setPokeName] = React.useState('empoleon');
    const [nowPlaying, setNowPlaying] = React.useState(false);


    // //spotify
    // const logout = () => {
    //     setToken("");
    //     window.localStorage.removeItem("token");
    // }



    //spotify artists
    const renderSongs = () => {
        return tracks.map(song => (
            <div key={song.id}>
                {song.name}
            </div>
        ))

    }

    // const searchSongs = async (e) => {
    //     e.preventDefault();
    //     const { data } = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "track"
    //         }
    //     })

    //     console.log(data);
    //     setSongs(data.tracks.items);
    // }
    /*
    -----------------------------------------------------------------------------------------------------
    Umi's Spotify Code Below
    */
    const getNowPlaying = async () => {
        await spotifyApi.getMyCurrentPlaybackState().then((response) => {
            console.log(response);
            setNowPlaying({
                name: response.item.name,
                albumArt: response.item.album.images[0].url
            })
        })
    }

    /*-------------------------------------------------------------------------------------------------
    */
    //FLAVOR TEXT
    React.useEffect(() => {
        fetch("/flavor/" + inputText) //api call which returns a promise that we handle with the .then
            .then((res) => res.json())
            .then((pokemon) => {
                setText(pokemon.message);
                setId(pokemon.num);
                setPokeName(pokemon.name);

            });
    }, [inputText]); //the brackets are the CONDITIONAL, 
    //meaning that whenever the value of inputText is changed, then this function is 
    //re-rendered with the new value!

    //THE IMAGE
    React.useEffect(() => {
        fetch("/tempimage/" + inputText)  //api call which returns a promise that we handle with the .then
            .then((res) => res.json())
            .then((theImage) => setTheImage(theImage.message));
    }, [inputText]);//the brackets are the CONDITIONAL, 
    //meaning that whenever the value of inputText is changed, then this function is 
    //re-rendered with the new value!



    //this changes the value of holderInputText to the value of the input whenever the user enters a new character
    //we can't call it directly bc it has incomplete input
    //but it was the only way I could find to store the input!!
    let inputGrabber = (e) => {
        setholderInputText(e.target.value.toLowerCase()); //actively stores the val of the input
        //console.log(holderInputText);
        //lowercase is important here! 
        console.log(e.target.value.toLowerCase());
        console.log("inputGrabbed");
    };


    //changes the value of inputText (which is used for a lot right now!) when the user submits the data 
    let inputSubmitted = (e) => {
        e.preventDefault(); //prevents reloading of the page! Very important!!
        setinputText(holderInputText); //sets the val of this (to be entered maybe?)
        console.log("inputSubmitted");
        //render????
    };




    return (
        <>
            <p></p >
            <ImageCard number={id} name={pokeName} src={theImage} height={270} width={270} description={text}></ImageCard>

            {/* <button onClick={logout}>Logout</button> */}
            {/* <form onSubmit={searchSongs}>
                <input type='text' onChange={e => setSearchKey(e.target.value)} />
                <button type={"submit"}>Search</button>
            </form> */}
            <div>
                Now Playing: {nowPlaying.name}
            </div>
            <button onClick={getNowPlaying}>Check Now Playing</button>

            {renderSongs()}

            < p > Enter a pokemon!</p>
            <div>
                <InputSearch
                    onChange={(e) => inputGrabber(e)} //actively stores the val of the input
                    onSubmit={(e) => inputSubmitted(e)}  //prevents reloading and changes the real value 
                >
                </InputSearch>
            </div>
            {/*   <p>{inputText}</p> */}

            <div>
                <p></p>
                <SubmitButton></SubmitButton>
            </div>
        </>
    );
}