import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    z-index: 0;
    
    position: relative;
    
    &:hover {
        &::before{
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    
    &::before{
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background: ${theme.colors.accent};
        
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

`