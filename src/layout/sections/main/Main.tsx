import photo from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
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
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle= styled.h1`
    font-weight: 400;
    font-size: 27px;

`

const Name= styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 50px;
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