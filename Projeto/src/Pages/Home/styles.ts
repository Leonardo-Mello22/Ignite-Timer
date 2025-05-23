import styled from "styled-components";

export const HomeContainer = styled.main `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const FormContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props=>props.theme.gray900};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`; 

const Baseinput = styled.input `
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.gray900};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props=> props.theme.gray900};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme.blue300};
    }
`;

export const TaskInput = styled(Baseinput) `
    flex: 1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(Baseinput) `
    width: 4rem;
`;

export const CountdownContainer = styled.div `
    font-family: 'Roboto Mono', 'Courier New', Courier, monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme.gray900};

    display: flex;
    gap: 1rem;

    span {
        background: ${props => props.theme.white};
        padding: 1.5rem 1rem;
        border-radius: 8px;
    }
`;

export const Separator = styled.div `
    padding: 2rem;
    color: ${props=>props.theme.blue500};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

export const StartCountdownButton = styled.button `
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme.blue500};
    color: ${props => props.theme.white};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme.blue300};
    }
`;