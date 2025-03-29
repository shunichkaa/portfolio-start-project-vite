import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>@Aleksandra Mate</Name>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`

`
const Slide = styled.div`
    max-width: 500px;
    text-align: center;
`
const Text = styled.p`

`
const Name  = styled.span`

`