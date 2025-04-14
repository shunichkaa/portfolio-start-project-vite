import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import { S } from "./Contacts_Styles.ts";
import React from "react";


export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field as={"textarea"} placeholder={"message"}/>
                    <Button type="submit">Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
