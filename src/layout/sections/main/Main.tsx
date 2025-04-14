import photo from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import React from "react";
import { S } from './Main_Styles.ts';

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I'm <span>Aleksandra Mate</span></S.Name>
                    <S.MainTitle>A Web Developer</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Photo" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
