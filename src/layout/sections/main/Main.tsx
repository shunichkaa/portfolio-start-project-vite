import photo from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import { S } from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main:React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I'm <span>Aleksandra Mate</span></S.Name>
                    <S.MainTitle>
                        <p>A Web Developer</p>
                        <Typewriter
                            options={{
                                strings: ['A Web Developer','A Web Designer','A Front-End Developer',],
                                autoStart: true,
                                loop: true,
                                delay: 150,
                            }}
                        />
                    </S.MainTitle>
                    </div>
                    <Tilt className="background-stripes parallax-effect-glare-scale"
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="Photo" />
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
