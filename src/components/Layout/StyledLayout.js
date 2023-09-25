
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
gap:300px;
justify-content: center;


`
export const StyledHeader= styled.header`
padding:20px 0;
background-color: #960018;
font-size: 26px;
position: sticky;
top:0;


`
export const StyledLink=styled(NavLink)`
text-decoration: none;
color:white; 
`