import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field as={"textarea"} placeholder={"message"}/>
                <Button type="submit">Send Message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact= styled.section`
min-height: 50vh;
`

const StyledForm= styled.form`
    max-width: 500px;
    weight: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field= styled.input`

`