import styled from "styled-components";

export const HeaderMenu = (props: {menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`
const ListItem = styled.li`

    
`
const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0%;
    text-align: center;
    color: #7572D5;
    
`