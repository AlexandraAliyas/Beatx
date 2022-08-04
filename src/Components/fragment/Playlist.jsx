import React from 'react';
import '../assets/scss/Playlist.scss';
import {useSelector} from "react-redux";
import MusicCard from "./MusicCard";
import Container from "./Container";

const Playlist = () => {
    const typeOfPlaylist = window.location.pathname.substring(15).split("/")[1];
    const {playlists} = useSelector(state=>state.musicReducer);
    return (
        <Container>
            <div  className={"Playlist"}>
                <h3>Your {typeOfPlaylist} playlist</h3>
                <div className="Playlist-container">
                    {
                        playlists.map((item)=>(
                            // console.log(item.type,item.id,typeOfPlaylist,item.name,item.img,item.author_name)
                            (item.type === typeOfPlaylist) &&
                            <MusicCard key={item.id} music={item}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default Playlist;