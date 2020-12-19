import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #ECAC46;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    cursor: pointer;
    margin-right: 2rem;
    margin-left: 2rem;
    
    &:hover {
        color: #FFFFFF;
        transition: 0.2s ease-in-out;
        text-decoration: none;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;