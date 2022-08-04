import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/musichome"}>
                    <h1>
                        B E A T X
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;