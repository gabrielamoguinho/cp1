import styled from 'styled-components';

export const StyledTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const Styledh6 = styled.h6`
    color: #808080;
    margin-bottom: 0;
`

export const StyledList = styled.div`
    display: flex;
    gap: 2rem;
    align-items:center;
`

export const StyledInput = styled.input`
    width: 75%;
    padding: 10px;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
`;

export const StyledTaskList = styled.ul`
    list-style-type: none;
    padding: 0;

    & li {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    & input[type="checkbox"] {
        margin-right: 10px;
        transform: scale(1.5);
    }
`;
