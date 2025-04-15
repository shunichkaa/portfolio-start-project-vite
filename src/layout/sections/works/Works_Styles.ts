import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.tsx";
import {Link} from "../../../components/Link.ts";
import {Button} from "../../../components/Button.ts";

const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`
const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;
    
    ${Link}{
    padding: 10px 0;
        
    & + ${Link} {
        margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px;
    } 
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`
    margin: 14px 0 10px;
`
const Text = styled.p`
    
`
const Description = styled.div`
padding: 25px 20px;
    
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        z-index: 2;
        color: ${theme.colors.font};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
        z-index: 1;
    }

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        ${Button} {
            opacity: 1;
        }

        &::before {
            opacity: 1;
        }
    }
`

export const S = {
    Works,
    Work,
    Image,
    Title,
    Description,
    ImageWrapper,
    Text
}