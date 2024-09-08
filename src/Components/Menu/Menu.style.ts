import styled from "styled-components";

export const StyledMenu = styled.nav `
    display: flex;
    align-items: center;
    border-top: 1px solid lightgray;
    gap: 2rem;
`;

export const StyledWrapperMenu = styled.ul`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const StyledMenuItem = styled.li `
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    margin-left: 2rem;
    margin-right: 2rem;

    & a {
    font-size: 0.8rem;
    color: #1f1e31
    }
`;
