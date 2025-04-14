import {Icon} from "../icon/Icon.tsx";
import React from "react";

export const Logo:React.FC = () => {
    return (
        <div>
            <a href="/">
            <Icon iconId={'code'}/>
            </a>

        </div>
    );
};

export default Logo;