import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";


export const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 200){
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    })

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={"arrow-up"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    paddind: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
