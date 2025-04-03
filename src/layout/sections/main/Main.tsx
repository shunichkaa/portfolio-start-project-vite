import photo from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                    <span>Hi There</span>
                    <Name>I'm Aleksandra Mate</Name>
                    <MainTitle>A Web Developer</MainTitle>
                    </div>

                    <Photo src={photo} alt="Photo" />
                </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.78);
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle= styled.h1`
    
`

const Name= styled.h2`
    
`