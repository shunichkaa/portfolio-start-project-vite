import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field as={"textarea"} placeholder={"message"}/>
                    <Button type="submit">Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact= styled.section`

`

const StyledForm= styled.form`
    max-width: 540px;
    weight: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`
const Field= styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background: ${theme.colors.secondaryBg};
    padding: 7px 15px;

    font-family: Poppins, sans-serif;  
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05rem;
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-within {
        outline: 1px solid ${theme.colors.borderColor};
    }

`