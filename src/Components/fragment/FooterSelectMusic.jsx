import React, {useContext} from 'react';
import '../assets/scss/FooterSelectMusic.scss';
import {ThemeContext} from "../../api/Theme";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={{backgroundColor:useStyle.subTheme}} className={"Footer_Select_Music"}>
            <button className="text-center w-full" onClick={()=>window.location.reload()}>
            
            <Link to={"/musichome"}>
                Select a music to continue
            </Link>
            </button>
        </div>
    );
}

export default FooterSelectMusic;