import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@Aleksandra Mate</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`

`
const Name  = styled.span`

`
const Pagination  = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 40%;
        background-color: rgba(188, 158, 213, 0.62);
    }
`