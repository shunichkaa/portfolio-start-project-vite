import photo from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                    <SmallText>Hi There</SmallText>
                    <Name>I'm <span>Aleksandra Mate</span></Name>
                    <MainTitle>A Web Developer</MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.78);
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        
        @media ${theme.media.mobile} {
            width: 331px;
            height: 414px;


        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    
    @media ${theme.media.tablet} {
        width: 310px;
        height: 38  0px;
    }
`

const MainTitle= styled.h1`
    ${font({ weight: 400, Fmax: 27, Fmin: 20})}

`

const Name= styled.h2`
    ${font({family:  "'Josefin Sans, sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05rem;
    margin: 10px 0;
    
    span{
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

`

const SmallText= styled.h2`
    font-weight: 400;
    font-size: 14px;

`