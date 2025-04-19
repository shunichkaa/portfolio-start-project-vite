import {Icon} from "../icon/Icon.tsx";
import React from "react";
import {animateScroll as scroll} from "react-scroll";

export const Logo:React.FC = () => {
    return (
        <div>
            <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={'code'}/>
            </a>

        </div>
    );
};

export default Logo;