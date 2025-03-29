import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I'm Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan= styled.div`
    min-height: 30vh;
    
`