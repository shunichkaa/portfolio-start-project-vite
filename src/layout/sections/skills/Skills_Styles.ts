import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Skills = styled.section`
position: relative;
`

const Skill = styled.div `
    width: 330px;
    flex-grow: 1;
    padding: 42px 20px 52px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;  /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 0 15px;
`

const SkillText = styled.p`
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
    IconWrapper,
    SkillText
}