import React, {useContext, useEffect, useState} from "react";
import './css/MusicHome.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "../../api/Theme";
import Profile from "./Profile";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import Search from "./Search";
import About from "./About";
import Playlist from "../fragment/Playlist";
import {Skeleton} from "@material-ui/lab";

function getCurrPage(pathName) {
    switch (pathName) {
        case "/musichome":
            return <MusicCardContainer/>
        case "/musichome/home":
            return <MusicCardContainer/>
        case "/musichome/search":
            return <Search/>
        case "/musichome/profile":
            return <Profile/>
        case "/musichome/add":
            return <AddMusic/>
        case "/musichome/about":
            return <About/>
        
        default:
            if (pathName.startsWith("/musichome/playlist/")) {
                return <Playlist/>
            }
            return null
    }
}

function MusicHome() {


    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [currPage, setCurrPage] = useState(<MusicCardContainer/>);

    let pathname = window.location.pathname;
    // window.location.reload();

    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
        console.log(pathname);
        // window.location.reload();
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    const {playing, bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        
        // window.location.reload();
        setLoaded(true)
    }, []);


    return (
        <div style={useStyle.component} className={"home-container"}>
            {
                !loaded 
                ?
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
                    </div>
                :
                    <>
                        {
                            (screenSize <= 970) 
                            ? <MobileTopNavigation/> 
                            : <Navigation/>
                        }
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar/>
                            </div>
                            <div className="main-home"> {currPage} </div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge/>
                            </section>
                        }
                        <React.Fragment>
                            {
                                currMusic 
                                ? <FooterMusicPlayer music={currMusic}/>
                                : <FooterSelectMusic/>
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile/>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default MusicHome;