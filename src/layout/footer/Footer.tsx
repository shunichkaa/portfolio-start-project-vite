import styled from 'styled-components';
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name>Aleksandra</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"inst"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"telegram"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkIn"}/>
                            </SocialLink>
                        </SocialItem>
                </SocialList>
                <CopyRight>© 2025 Aleksandra Mate, All Rights Reserved.</CopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
min-height: 20vh;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    
`
const SocialLink = styled.a`

`
const CopyRight = styled.small`

`
const SocialItem = styled.li`

`