import styled from "styled-components";


export const CheckoutSectionContainer = styled.div`
display: flex;
    flex-direction: column;
`;


export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border-style : solid;
    border-width: 1px;
    border-color: gray;
    border-radius: 7px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

export const TotalSubSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-style: solid;
    border-width: 0px;
    border-bottom-width: 1px;
    margin-top: 1rem;
    margin-bottom:0;
    border-color: gray;
    
    p{
        font-size: 1rem;
        margin-bottom:0.5rem;
    }
`;

export const TotalSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    
    p{
        font-size: 1.6rem;
        font-weight: 600;
        color: #c32e1d;
    }
`;

export const CheckoutButton = styled.button`

    background-color: #c32e1d;
    border-width: 0px;
    color: #fff;
    border-radius: 7px;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;

`;


